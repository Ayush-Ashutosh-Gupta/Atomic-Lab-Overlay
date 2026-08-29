// Background Service Worker for Atomic Lab Overlay
console.log('[Atomic Lab Overlay] Background service worker initialized');

// When user clicks extension toolbar icon or action
chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id) return;
  try {
    // Send toggle message to content script
    await chrome.tabs.sendMessage(tab.id, { action: 'TOGGLE_SIDEBAR' });
  } catch (err) {
    // Inject content script dynamically if not yet loaded
    try {
      await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        files: ['content.js']
      });
      setTimeout(() => {
        chrome.tabs.sendMessage(tab.id!, { action: 'TOGGLE_SIDEBAR' }).catch(() => {});
      }, 150);
    } catch (injectErr) {
      console.warn('[Atomic Lab Overlay] Cannot inject script on this tab:', injectErr);
    }
  }
});

// Installation & Update Hook
chrome.runtime.onInstalled.addListener((details) => {
  console.log('[Atomic Lab Overlay] Extension installed/updated:', details.reason);
});

export {};