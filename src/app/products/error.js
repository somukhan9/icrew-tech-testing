'use client'

export default function Error({ error, reset }) {
  return (
    <div className="flex h-[20rem] w-full flex-col items-center justify-center gap-5">
      <h1 className="text-4xl">There is some error.</h1>
      <h4 className="text-2xl">Please try after some time.</h4>
      <button
        className="rounded-md bg-black px-10 py-2 text-white"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  )
}
