import * as React from 'react';
import getInfo from 'instagram-account-info';

function useInstagram(username: String) {
  let [state, setState] = React.useState<Object | null>(null);
  React.useEffect(() => {
    let didRun = true;
    getInfo(username).then((info: Object) => {
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
