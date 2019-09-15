import * as React from 'react';
import getInfo from 'instagram-account-info';

function useInstagram(username: String) {
  let [state, setState] = React.useState<Object | null>(null);
  console.log(`username: `, username)
  React.useEffect(() => {
    let didRun = true;
    // console.log(`getInfo(username): `, getInfo(username))
    getInfo(username).then((info: Object) => {
      console.log(`info: `, info)
      if (didRun) {
        setState(info);
      }
    }).catch((e: Error) => {
      console.error(e)
      if (didRun) {
        setState(null);
      }
    })

    return () => {
      didRun = false;
    };
  }, [username]);

  return state;
}

export {useInstagram};

// const useInstagram = function(){};

// export {useInstagram}

