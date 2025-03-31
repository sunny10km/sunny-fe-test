export interface StickerData {
    id: string;
    newCode: string;
    userGroupCode : string;
    stickerName: string;
    fileName: string;
    originalFileName: string;
    uploadFileName: string;
    duration: string;
    thumbnailUrl: string;
    stickerUrl: string;
    mp3Url: string;
    isActive: boolean;
    stickerFile?: File | null;
}

export interface UserGroupData {
    code: string;
    name: string;
    companyName: string;
    isActive: boolean;
    logoUrl: string;
}
