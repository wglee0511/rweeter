# Rweeter

---

## Decription

- 트위터 클론코딩

---

## Stack

- Front-end

  - React
  - styled-components
  - Redux
  - React - Redux
  - Redux - toolkit
  - Redux-thunk
  - Connected-react-router
  - React-router-dom

- Serverless
  - firebase firestore
  - firebase storage
  - firebase auth

---

## Redux Structure

- User

  - state : {
    - user: {
      - user_id
      - user_uid
      - user_profile
      - user_name
      - }
    - is_Loading
    - is_Login
  - }

---

- Rweet

  - state: {
    - list : [...each_post]
    - paging
    - is_loading
  - }

  - each_post : {
    - post_id : doc.id(in firebase)
    - user_info : {
      - user_uid
      - user_name
      - user_profile
    - }
    - image_url
    - contents
    - comments_cnt
    - insert_dt
  - }

---

- image
  - state : {
    - image_url
    - preview
    - up_loading
  - }

---

- comment

  - state : {
    - list : [...each_comment]
    - is_loading
  - }

  - each_comment : {
    - comment_id : doc.id(in firebase)
    - post_id
    - user_uid
    - user_name
    - user_profile
    - insert_dt
    - contents
  - }
