'use client';

import React from 'react';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorId: string;
}

/**
 * Global React Error Boundary.
 * - Catches JS errors in any child component tree
 * - Logs to Firebase Analytics (best-effort)
 * - Shows a user-friendly recovery UI
 * - In dev, surfaces the error message for debugging
 */
export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorId: '' };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorId: `err_${Date.now().toString(36)}`,
    };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // Log to Firebase Analytics — best-effort, no await
    try {
      import('firebase/analytics').then(({ getAnalytics, logEvent }) => {
        import('@/lib/firebase').then(({ app }) => {
          const analytics = getAnalytics(app);
          logEvent(analytics, 'exception', {
            description: `${error.name}: ${error.message}`,
            fatal: false,
            error_id: this.state.errorId,
            component_stack: info.componentStack?.slice(0, 500) ?? '',
            page_path: typeof window !== 'undefined' ? window.location.pathname : '',
          });
        });
      });
    } catch {
      // never throw inside componentDidCatch
    }

    if (process.env.NODE_ENV === 'development') {
      console.error('[ErrorBoundary] Caught error:', error, info);
    }
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorId: '' });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;

      return (
        <div className="min-h-[60vh] flex items-center justify-center px-6 bg-surface">
          <div className="max-w-md w-full text-center">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-error-container/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-error" style={{ fontSize: 32 }}>error_outline</span>
            </div>
            <h2 className="text-xl font-bold text-on-surface mb-2 font-display">Something went wrong</h2>
            <p className="text-sm text-on-surface-variant mb-2 leading-relaxed">
              An unexpected error occurred. Our team has been notified.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <pre className="text-left text-xs bg-surface-container-high p-3 rounded-xl overflow-auto mb-4 text-error border border-error/20 max-h-32">
                {this.state.error.message}
              </pre>
            )}
            <p className="text-xs text-on-surface-variant mb-6 font-mono opacity-60">
              Ref: {this.state.errorId}
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={this.handleReset}
                className="px-5 py-2.5 bg-primary text-white rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors"
              >
                Try Again
              </button>
              <Link
                href="/"
                className="px-5 py-2.5 bg-surface-container border border-outline-variant/30 text-on-surface rounded-xl text-sm font-medium hover:bg-surface-container-high transition-colors"
              >
                Go Home
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
