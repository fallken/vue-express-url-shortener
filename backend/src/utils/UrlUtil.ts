
export const generateRandomStr = (length: number = 8): string => {
    const characters: string = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength: number = characters.length;
    
    let result: string = "";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}