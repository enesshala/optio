const NEXT_PUBLIC_SHOWCASE_LIST = process.env.NEXT_PUBLIC_SHOWCASE_LIST;

const ENV_SHOWCASE_LIST =
  (NEXT_PUBLIC_SHOWCASE_LIST &&
    NEXT_PUBLIC_SHOWCASE_LIST.split(",").map((i) => {
      return {
        url: i,
      };
    })) ||
  [];

export const showcases = [
  {
    url: "https://optio.digital",
  },
].concat(ENV_SHOWCASE_LIST);
