interface IBooksData {
    loading:boolean,
    error:String,
    books:Array<IBook>
}

interface IBook {
    path:String
    title:String
}