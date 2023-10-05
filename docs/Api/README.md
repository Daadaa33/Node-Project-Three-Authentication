# node js assiment gabi school

### api files ku jiro 
1. bookstore - fields: id, ownerId, name, location, created, updated
2. author - fields: id, name, created, updated.
3. book - fields: id, authorId, bookstoreId, title, price, image, created, updated.
4. owner - fields: id, name, email, password, created, updated

waxaan sameeyay owner , oo aan u sameeyay singup iyo login anigoo isticmaalaya bcrypt iyo jwt oon aan token ahaan u isticmaalay

ka dib database ka waxaan ku deploy gareeyay supabase 

# owner
* [ ] si aad u hesho waxa ku jiro owners is ticmaalo `/api/owner`
* [ ] si aad u sameesato new onwer is ticmaal `/api/owner/singup` waxaana muhiim ah inaad geliso `name`, `email`, `password` `
* [ ] si aad u login gareeso ownerka aad sameesay is ticmaal `api/owner/login` ka dibna gali `email address`, iyo `password`


# bookstore 
* [ ] si aad u hesho dhamaan bookstore isticmaal `/api/bookstore`
* [ ] si aad ugu soo darto new bookstore isticmaal `/api/bookstore` and isticmaal access token , waxaan muhiim ah inaad body laga helo `name` ,`email`, `password` 

# book 
* [ ] si aad u hesho dhamaan books ka is ticmaal endpoint ah `/api/books`


# author 
* [ ] si aad u hesho dhamaan author istcmaal endpoint `/api/author`


# middleware 
* [ ] si aad u hubiso in uu shaqeenaayo middlewareka `bookstore ka` isticmaal token la'aan 