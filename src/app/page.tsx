import Image from "next/image";
import Link from 'next/link';

import { Stack } from '@mui/material';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {/* Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code> */}
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            Ta.K.P
          </a>
        </div>
      </div>

      <div className="">
        <Stack
          direction="row"
          sx={{
            justifyContent: "cente",
            alignItems: "center",
            width: "100%",
            height: "50px",
          }}
          className="text-5xl"
        >
          <h1>
            チョキン，パチン，ストン
          </h1>
        </Stack>
      </div>

      <div className="">
        <Stack
          direction="row"
          sx={{
            justifyContent: "cente",
            alignItems: "center",
            width: "100%",
            height: "50px",
          }}
          className="text-gray-500"
        >
          <div>
            アカウントは不要です。<br />
            広告表示はありません。<br />
            利益も責任も取りません。<br />
            自由に遊んでください。
          </div>
          <div>
            No account.<br />
            No ads.<br />
            No profits or responsibilities.<br />
            Just play peacefully.
          </div>
        </Stack>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <Link href="/battle">
          <h2 className="mb-3 text-2xl font-semibold">
            やるか？ポケカ！{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Players turn switcher for Pokemon card battle.
          </p>
        </Link>

        <Link href="/bingo">
          <h2 className="mb-3 text-2xl font-semibold">
            ビンゴ！{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Comming soon.
          </p>
        </Link>

        <Link href="/none">
          <h2 className="mb-3 text-2xl font-semibold">
            準備中{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Comming soon.
          </p>
        </Link>

        <Link href="/none">
          <h2 className="mb-3 text-2xl font-semibold">
            準備中{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Comming soon.
          </p>
        </Link>

      </div>
    </main>
  );
}
