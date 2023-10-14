import { getCookie } from 'cookies-next';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { hashMD5 } from './Md5Hash';

const removeEmptyNodes = (nodes) => {
  return nodes.filter((node) => {
    if (node.type === 'element') {
      node.children = removeEmptyNodes(node.children);
      return true;
    }
    return node.content.length;
  });
};

const stripWhitespace = (nodes) => {
  return nodes.map((node) => {
    if (node.type === 'element') {
      node.children = stripWhitespace(node.children);
    } else {
      node.content = node.content.trim();
    }
    return node;
  });
};

export const removeWhitespace = (nodes) => {
  return removeEmptyNodes(stripWhitespace(nodes));
};

export const generateHeader = (obj) => {
  const result = obj.children[0].content;
  return result;
};

export const transformJson = (arr) => {
  const result = arr.children.map((item) => {
    const title = item.children[0].children[0].content;
    const href = item.children[0].attributes[0].value;
    const test1 = item.children
      .filter((e) => e.tagName === 'ul')
      .map((e) => e.children);
    const children =
      test1 &&
      test1[0] &&
      test1[0]
        .map((r) => r.children)
        .map((x) => {
          return x;
        })
        .map((e) => {
          const href = e?.find((e) => e.tagName === 'a').attributes[0]?.value;
          const name = e?.find((e) => e.tagName === 'a').children[0]?.content;
          const children = e
            ?.find((e) => e.tagName === 'ul')
            ?.children.map((e) => e.children)
            .map((e) => e && e[0])
            ?.map((e) => {
              const href = e.attributes[0].value;
              const name = e.children[0].content;
              return { name, href };
            });

          return { name, href, children };
        });
    return { title, href, children };
  });
  return result;
};

export const mainJson = (arr) => {
  const result = arr.map((_e, index, arr) => {
    const header = index % 2 === 0 ? index : null;
    const data = index % 2 !== 0 ? index : null;
    return { header: arr[header], data: data && arr[data] };
  });
  return result;
};

function flatten(arr) {
  return arr.reduce(function (ret, item) {
    return ret?.concat(item?.constructor === Array ? flatten(item) : [item]);
  }, []);
}

export const transformSearch = (arr) => {
  const tier1 = arr.map((e) => {
    return e.children;
  });
  const tier2 = tier1.map((e) => {
    return e.map((x) => x.children);
  });
  const tier3 = tier2?.map((e) => {
    return e?.map((x) => {
      return x?.map((y) => {
        return y.children.map((u) => {
          const name = u.content;
          const href = y?.attributes[0]?.value;
          if (u.type === 'text') {
            return { name, href };
          }
          return u.children.map((q) => {
            const name = q.children[0].content;
            const href = u.children[0].attributes[0].value;
            // const name1 = q;
            if (q.tagName === 'a') {
              return { name, href };
            }
            return q.children.map((h) => {
              const name = h.children[0].children[0].content;
              const href = h.children[0].attributes[0].value;
              return { name, href };
            });
          });
        });
      });
    });
  });
  const result = flatten(tier3);
  return result;
};
export const test = (arr) => {
  let sum = arr.reduce((previousValue, currentValue) => {
    return { ...previousValue, test: currentValue.children };
  }, []);
  return sum;
};

export const strColorChanger = (str, word, color) => {
  const res = str.replaceAll(
    word,
    `<span style="color:${color};">${word}</span>`,
  );
  return res;
};

export const isProd =
  getCookie('PRODUCTION') === false || getCookie('PRODUCTION') === 'false'
    ? false
    : true;

export const fetchWrapperOptions = () => {
  const dev = {
    sitesServiceURL: 'https://svc.dev.zesty.io/sites-service/',
    instancesAPIURL: '.api.dev.zesty.io/v1',
    authAPIURL: 'https://auth.api.dev.zesty.io',
    accountsAPIURL: 'https://accounts.api.dev.zesty.io/v1',
    mediaAPIURL: 'https://svc.dev.zesty.io',
  };

  const prod = {};

  if (!isProd) {
    return dev;
  } else {
    return prod;
  }
};

export const getUserAppSID = () => {
  const prod = getCookie('APP_SID');
  const dev = getCookie('DEV_APP_SID');

  if (!isProd) {
    return dev;
  } else {
    return prod;
  }
};

export function canUseDOM() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
}
export const generateUniqDropdown = ({ data, property = 'category' }) => {
  const dropdownList = data
    .map((e) => {
      return { value: e[property], label: e[property] };
    })
    .filter(
      (value, index, self) =>
        index ===
        self.findIndex(
          (t) => t.value === value.value && t.label === value.label,
        ),
    );
  const res = [{ value: '', label: 'All Categories' }, ...dropdownList];

  return res;
};

export const removeDupsInArrObj = (arr, property) =>
  Object.values(
    arr.reduce((acum, item) => {
      acum[item[property]] = item;
      return acum;
    }, {}),
  );

export const isInstanceOwner = (userWithRoles, userInfo) => {
  const currentRole = userWithRoles?.find((e) => e.ZUID === userInfo?.ZUID)
    ?.role?.name;
  const isStaff = userInfo?.staff;

  if (currentRole === 'Owner' || currentRole === 'Admin' || isStaff) {
    return true;
  } else {
    return false;
  }
};

export const isJsonString = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export const notistackMessage = async (
  enqueueSnackbar,
  successProps,
  response,
  options = {
    hideSuccessMessage: false,
  },
) => {
  if (
    (response?.status >= 200 && response?.status <= 299) ||
    (response?.code >= 200 && response?.code <= 299)
  ) {
    if (successProps.callback !== undefined) await successProps?.callback();

    if (!options?.hideSuccessMessage) {
      enqueueSnackbar(successProps?.message, {
        variant: 'success',
      });
    }
  } else {
    enqueueSnackbar(response?.message || response?.error, {
      variant: 'error',
    });
  }
};

export const parseCookie = (str) =>
  str
    ?.split(';')
    ?.map((v) => v.split('='))
    ?.reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});

export const getIsAuthenticated = (res) => {
  const getHeaderCookie = res.getHeader('set-cookie')?.[0];
  let isAuthenticated = JSON.parse(
    parseCookie(getHeaderCookie)?.isAuthenticated || false,
  );

  return isAuthenticated;
};

export const OPTIONS = (options, separator) => {
  const res = options?.split(separator).map((e) => {
    return { value: e, label: e };
  });
  return res;
};

export const getTimeAgo = (date) => {
  // reference: https://stackoverflow.com/a/72973090
  const MINUTE = 60;
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;
  const WEEK = DAY * 7;
  const MONTH = DAY * 30;
  const YEAR = DAY * 365;
  const secondsAgo = dayjs().diff(date, 'seconds');

  if (secondsAgo < MINUTE) {
    return secondsAgo + ` second${secondsAgo !== 1 ? 's' : ''} ago`;
  }

  let divisor;
  let unit = '';

  if (secondsAgo < HOUR) {
    [divisor, unit] = [MINUTE, 'minute'];
  } else if (secondsAgo < DAY) {
    [divisor, unit] = [HOUR, 'hour'];
  } else if (secondsAgo < WEEK) {
    [divisor, unit] = [DAY, 'day'];
  } else if (secondsAgo < MONTH) {
    [divisor, unit] = [WEEK, 'week'];
  } else if (secondsAgo < YEAR) {
    [divisor, unit] = [MONTH, 'month'];
  } else {
    [divisor, unit] = [YEAR, 'year'];
  }

  const count = Math.floor(secondsAgo / divisor);
  return `${count} ${unit}${count > 1 ? 's' : ''} ago`;
};

export const gravatarImg = (userInfo = {}) => {
  const res = 'https://www.gravatar.com/avatar/' + hashMD5(userInfo?.email);
  return res;
};

export const isMatch = (values, matchValue) => {
  for (let i = 0; i < values.length; i++) {
    if (values[i]?.toString().toLowerCase().includes(matchValue)) return true;
  }

  return false;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const useRouterCheck = (route) => {
  const router = useRouter();
  const url = router.asPath.split('/').filter((e) => e)[0];
  if (url === route) {
    return true;
  } else {
    return false;
  }
};

export const transFormEndpoint = ({
  url = '',
  instanceZUID = '',
  isLoggedIn = false,
  contentModelZUID = '',
}) => {
  const appUserZuid = getCookie('APP_USER_ZUID');
  const validateZuid = (arg) => {
    if (arg && isLoggedIn) {
      return true;
    } else {
      return false;
    }
  };
  const res = url
    ?.replaceAll('{{protocol}}', 'https')
    ?.replaceAll('{{accounts_api_url}}', 'accounts.api.zesty.io')
    ?.replaceAll('{{instances_api_url}}', 'instances.api.zesty.io')
    ?.replaceAll('{{accounts_api_version}}', 'v1')
    ?.replaceAll('{{instances_api_version}}', 'v1')
    ?.replaceAll('{{api_version}}', 'v1')
    ?.replaceAll(
      '{{instance_zuid}}',
      validateZuid(instanceZUID.startsWith('8-'))
        ? instanceZUID
        : '8-xxxxxxxxx',
    )
    ?.replaceAll('{{user_zuid}}', appUserZuid)
    ?.replaceAll('{{link_zuid}}', '7-xxxxxxxxxx')
    ?.replaceAll(
      '{{site_zuid}}',
      validateZuid(instanceZUID.startsWith('8-'))
        ? instanceZUID
        : '8-xxxxxxxxx',
    )
    ?.replaceAll(
      '{{content_model_zuid}}',
      validateZuid(contentModelZUID.length !== 0 ? true : false)
        ? contentModelZUID
        : '6-xxxxxxxxx',
    );

  return { endpoint: res };
};
export const generateAlt = (name) => {
  return `zesty customer logo ${name}`;
};
