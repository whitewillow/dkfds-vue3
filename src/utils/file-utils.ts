export function removeBrowserFileContentHeaders (data: string): string {
  // Remove the "data:...;base64," part, as it make Java sad ...
  const regex = RegExp('data:([0-9a-z/.-]+);base64,', 'g');
  if (regex.test(data)) {
    return data.slice(regex.lastIndex);
  }
  return data;
}

export function downloadBlob (blob: Blob, filnavn = 'download') {
  const url = window.URL.createObjectURL(blob);

  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filnavn;
  anchor.click();

  window.URL.revokeObjectURL(url);
}

/**
 * Updates the file contenttype
 * @param blob file as blob
 * @param type eg. text/csv, application/pdf, etc
 * @returns blob
 */
export function updateBlobType (blob: Blob, type: string): Blob {
  return new Blob([blob], { type });
}

export function readableFileSize (fileSizeInBytes: number) {
  let b = fileSizeInBytes;
  let u = 0;
  const s = 1024;
  while (b >= s || -b >= s) {
    b /= s;
    u += 1;
  }
  return `${(u ? `${b.toFixed(1)} ` : b) + ' KMGTPEZY'[u]}B`;
}

export function base64Decode (data: string): string {
  return decodeURIComponent(escape(window.atob(data)));
}