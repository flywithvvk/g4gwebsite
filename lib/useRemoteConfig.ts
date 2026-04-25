'use client';
/**
 * Lightweight React hooks for Firebase Remote Config.
 * Reads from the already-fetched RC cache (populated by RemoteConfigInit in layout).
 * Falls back to REMOTE_CONFIG_DEFAULTS on first render and on any RC failure.
 */
import { useState, useEffect } from 'react';
import { REMOTE_CONFIG_DEFAULTS, rcString, rcBoolean, initRemoteConfig } from './remoteConfig';

export function useRCString(key: string): string {
  const [val, setVal] = useState(String(REMOTE_CONFIG_DEFAULTS[key] ?? ''));
  useEffect(() => {
    initRemoteConfig()
      .then(() => { setVal(rcString(key)); })
      .catch(() => {});
  }, [key]);
  return val;
}

export function useRCBoolean(key: string): boolean {
  const [val, setVal] = useState(Boolean(REMOTE_CONFIG_DEFAULTS[key]));
  useEffect(() => {
    initRemoteConfig()
      .then(() => { setVal(rcBoolean(key)); })
      .catch(() => {});
  }, [key]);
  return val;
}
