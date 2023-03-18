

export const strContains = (stringFull, stringPart) => {
    if (stringFull.toLowerCase().includes(stringPart.toLowerCase()))
    {
        return true;
    }
        return false;
}
