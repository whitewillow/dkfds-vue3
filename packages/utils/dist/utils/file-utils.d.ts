export declare function removeBrowserFileContentHeaders(data: string): string;
export declare function downloadBlob(blob: Blob, filename?: string): void;
/**
 * Updates the file contenttype
 * @param blob file as blob
 * @param type eg. text/csv, application/pdf, etc
 * @returns blob
 */
export declare function updateBlobType(blob: Blob, type: string): Blob;
export declare function readableFileSize(fileSizeInBytes: number): string;
export declare function base64Decode(data: string): string;
