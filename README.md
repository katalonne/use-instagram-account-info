# use-instagram-account-info

React Hooks to fetch instagram account information. [`instagram-account-info`](https://github.com/katalonne/instagram-account-info) as main dependency.

To install it:

```
yarn add use-instagram-account-info

// or 

npm install use-instagram-account-info --save
```

## API Explained

In your app, you can add:

```javascript
import { useInstagram } from 'use-instagram-account-info';

function App() {
  const info = useInstagram(username)
  ...
}
```

### `info` object is composed of:

- `info`: It is either `null` or an object.
- `info.followers`: `Number` of followers
- `info.following`: `Number` of people following
- `info.isPrivate`: `Boolean`
- `info.isVerified`: `Boolean`
- `info.posts`: `Number` of posts
- `info.profileImage`: `String`, Avatar Url

## Example

```javascript
import { useInstagram } from 'use-instagram-account-info';

function App() {
  const username = 'katalonne'
  const info = useInstagram(username);

  if (!info) {
    return null;
  }

  const { 
    followers, 
    following, 
    isPrivate, 
    isVerified, 
    posts, 
    profileImage 
  } = info;

  return (
    <div>
      <p>{username} has {followers} followers.</p>
      <p>{username} is following {following} people.</p>
      <p>{username} has profile set to private: {isPrivate} </p>
      <p>{username} has verified profile: {isVerified}.</p>
      <p>{username} has {posts} posts.</p>
      <p>{username} has {followers} followers</p>
      <img src={profileImage} />
    </div>
  );
}
```

### License

MIT License © [Catalin Besleaga](https://catalinbesleaga.co)
