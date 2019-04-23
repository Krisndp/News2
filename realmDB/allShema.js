import Realm from 'realm';
export const CHANG_LIGHT = "change_light";
export const RECENTLY_READ = "recently_read";
export const LIST_RECENTLY_READ = "list_recently_read";
export const BOOK_MARK = "book_mark";
export const LIST_BOOK_MARK = "list_book_mark";

export const RecentlyReadSchema = {
    name: RECENTLY_READ,
    primaryKey: 'id',
    properties: {
        id: 'int',
        title: 'string',
        links: 'string',
        subtitle: 'string',
        illustration: 'string',
        //published:'date'
    }
}

// export const ListRecentlyReadSchema = {
//     name: LIST_RECENTLY_READ,
//     primaryKey: "id",
//     properties: {
//         id: 'int',
//         name: 'string',
//         recentlReads: {
//             type: 'list',
//             objectType: RECENTLY_READ
//         }
//     }
// }
const databaseOptions = {
    path: 'NewsApp.realm',
    schema: [RecentlyReadSchema],
    schemaVersion: 0
};

export const insertRecentlyRead = (recentlyRead) => new Promise((resolve,reject) =>{
    Realm.open(databaseOptions).then(realm => {
        realm.write(()=>{
            realm.create(RECENTLY_READ, recentlyRead);
            resolve(recentlyRead)
            console.log(recentlyRead)
        })
    }).catch(err => reject(err))
})

export default new Realm(databaseOptions);