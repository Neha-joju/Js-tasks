function countVowels(str)
{
    let count=0;
    for(let i=0; i<str.length;i++)
    {
        if(["a","A","E","e","i","I","o","O","u","U"].includes(str[i]))
        {
            count = count + 1;
        }
    }
    return count;
}
console.log(countVowels("DEvelOpment"));