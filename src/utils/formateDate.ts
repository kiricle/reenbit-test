export const formateDate = (date: Date): string => {
    const yyyy = date.getFullYear();
    const mm = '0' + (date.getMonth() + 1);
    const dd = '0' + date.getDate();

    return `${dd.slice(-2)}.${mm.slice(-2)}.${yyyy}`;
};
