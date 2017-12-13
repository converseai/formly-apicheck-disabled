if (apiCheck !== undefined && apiCheck.globalConfig !== undefined) {
  apiCheck.globalConfig.disabled = true;
} else {
  console.warn('apiCheck not configured');
}
