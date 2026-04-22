'use client';

import { useEffect } from 'react';
import { initRemoteConfig } from '@/lib/remoteConfig';

/**
 * Initialises Firebase Remote Config on first page load.
 * Runs silently in the background — no UI.
 * Config values are cached for 1 hour per REMOTE_CONFIG_DEFAULTS.
 */
export function RemoteConfigInit() {
  useEffect(() => {
    initRemoteConfig().catch(() => {});
  }, []);

  return null;
}
