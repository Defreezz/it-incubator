export function createPaginator(pages:number[], pagesCount:number, currentPage:number){

    if(pagesCount > 10) {
        if(currentPage > 5 && currentPage !== pagesCount) {
            for (let i = currentPage-4; i <= currentPage+5; i++) {//6// 2 <= 11 i=2+1
                pages.push(i)
                if(i === pagesCount) break
            }
        }
        else {
            for (let i = 2; i <= 10; i++) {
                pages.push(i)
                if(i === pagesCount) break
            }
        }
    }  else {
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
    }
}
let pages:number[] = []
createPaginator(pages,50,6)
console.log(pages)