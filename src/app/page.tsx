import Image from "next/image";
import Link from 'next/link';

import { Stack } from '@mui/material';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div>
          {/* Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code> */}
        </div>
        <div className="text-gray-500">
          By{" "}
          Pikaru
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
        <Link href="/pokeca">
          <h2 className="mb-3 text-2xl font-semibold">
            ポケカ！{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Yaruka? Pokeca!
          </p>
        </Link>

        <Link href="/tic-tac-toe">
          <h2 className="mb-3 text-2xl font-semibold">
            三目並べ{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            From React tutorial.
          </p>
        </Link>

        <Link href="/bingo">
          <h2 className="mb-3 text-2xl font-semibold">
            ビンゴ{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Bingo game with the little bird.
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
