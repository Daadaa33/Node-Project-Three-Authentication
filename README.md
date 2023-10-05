# node js assiment gabi school


asc , waxaan ka shaqeenayay assignmentiga node js oo linkigiisa hoos idin dhigi doono , waxaa rajaynaa inaad ka heli doon
wax walbo oo aad ugu baahantahy codekan hoos ayaad ka heli.
[linkiga assigment](https://www.youtube.com/watch?v=6Yv-uLJOluo)


#### linkiga code  
`https://bookstore-backend-u6qy.onrender.com`

## Set Up The Project With Git

**Follow these steps to set up and work on your project:**

* [ ] Create a forked copy of this project.
* [ ] Clone your OWN version of the repository (Not Gabi's by mistake!).
* [ ] Create a new branch: git checkout -b `<firstName-lastName>`.
* [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
* [ ] Push commits: git push origin `<firstName-lastName>`.

#### Setup

ka dib markaas clone greeso  Run this code `npm install`


### prisma files ku jiro 
1. bookstore - fields: id, ownerId, name, location, created, updated
2. author - fields: id, name, created, updated.
3. book - fields: id, authorId, bookstoreId, title, price, image, created, updated.
4. owner - fields: id, name, email, password, created, updated

# authorization
waxaan sameeyay `owner` , oo aan u sameeyay singup iyo login anigoo isticmaalaya `bcrypt` oo aan hash password ka istcmaalay iyo `jwt` oon aan token ahaan u isticmaalay

ka dib database ka waxaan ku deploy gareeyay supabase 

# owner
* [ ] si aad u hesho waxa ku jiro owners is ticmaalo `/api/owner`
* [ ] si aad u sameesato new onwer is ticmaal `/api/owner/singup` waxaana muhiim ah inaad geliso `name`, `email`, `password` `
* [ ] si aad u login gareeso ownerka aad sameesay is ticmaal `api/owner/login` ka dibna gali `email address`, iyo `password`


# bookstore 
* [ ] si aad u hesho dhamaan bookstore isticmaal `/api/bookstore`
* [ ] si aad ugu soo darto new bookstore isticmaal `/api/bookstore` and isticmaal access token , waxaan muhiim ah inaad body laga helo `onwerId` ,`name`, `location`
* [ ] si aad u update gareeso bookstore waxaa qasab ah in lagaa helo `name`
* [ ] si aad u delete gareeso bookstore waa in booga aad delete gareenayso id giisa uu yahay mid saxan  

# book 
* [ ] si aad u hesho dhamaan books ka is ticmaal endpoint ah `/api/books`
* [ ] waxaa qasab ah in mar walbo aad isticmaasho token lagaama yeeli doono token la'aan inaad wax ka badasho books
* [ ] si aad u update gareeso book waxaa qasab ah in body gaaga laga helo `authorId` , `bookstoreId` , `title`, `price` ,`image`
* [ ] si aad u delete gareeso book waa in booga aad delete gareenayso id giisa uu yahay mid saxan
      


# author 
* [ ] si aad u hesho dhamaan author istcmaal endpoint `/api/author`
* [ ]  waxaa qasab ah in mar walbo aad isticmaasho token lagaama yeeli doono token la'aan inaad wax ka badasho author
* [ ]  si aad ugu soo darto author cusub waa in body laga helo `name`
* [ ] si aad u update gareeso author waxaa qasab ah in body gaaga laga helo `name` 
* [ ] si aad u delete gareeso author waa in booga aad delete gareenayso id giisa uu yahay mid saxan


# middleware and authorization
* [ ] si aad u hubiso in uu shaqeenaayo middlewareka iyo authorization `bookstore ` iyo `author` iyo `books` isticmaal token la'aan  waxuu ku waydiin doonaa inaad token ka

      MAHDSANID ....
