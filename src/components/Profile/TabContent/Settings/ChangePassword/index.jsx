import { useState } from 'react'

export default function ChangePassword() {
  const [currentPasswordType, setCurrentPasswordType] = useState('password')
  const [newPasswordType, setNewPasswordType] = useState('password')
  const [confirmPasswordType, setConfirmPasswordType] = useState('password')

  return (
    <div className="w-full rounded-md border border-gray-200">
      <h1 className="border-b border-gray-200 p-4 text-xl font-medium text-[#1A1A1A]">
        Change Password
      </h1>
      <form className="flex flex-col gap-4 p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="mb-12 flex w-full flex-col gap-2">
            <label htmlFor="currentPassword" className="text-sm text-[#1A1A1A]">
              Current Password
            </label>
            <div className="relative w-full">
              <input
                type={currentPasswordType === 'password' ? 'password' : 'text'}
                id="currentPassword"
                name="currentPassword"
                // {...register('currentPassword')}
                // value={profile.currentPassword}
                // onChange={handleOnChange}
                placeholder="Enter Current Password"
                className="absolute left-0 right-0 top-0 rounded-md border border-gray-200 p-2 text-base text-[#666666] outline-none ring-offset-indigo-500 transition-all duration-200 ease-in-out focus:ring-2"
              />
              <button
                type="button"
                className="absolute right-0 top-0 z-50 p-2"
                onClick={() =>
                  setCurrentPasswordType((prev) =>
                    prev === 'password' ? 'text' : 'password',
                  )
                }
              >
                {currentPasswordType === 'password' ? (
                  <i className="bx bx-show text-xl"></i>
                ) : (
                  <i className="bx bx-hide text-xl"></i>
                )}
              </button>
            </div>
            {/* {errors['currentPassword'] && (
              <p className="text-xs text-red-700">
                {errors['currentPassword'].message}
              </p>
            )} */}
          </div>
        </div>

        <div className="mb-6 flex flex-wrap items-center justify-between gap-16 md:gap-4">
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="newPassword" className="text-sm text-[#1A1A1A]">
              New Password
            </label>
            <div className="relative w-full">
              <input
                type={newPasswordType === 'password' ? 'password' : 'text'}
                id="newPassword"
                name="newPassword"
                // {...register('newPassword')}
                // value={profile.newPassword}
                // onChange={handleOnChange}
                placeholder="Enter New Password"
                className="absolute left-0 right-0 top-0 rounded-md border border-gray-200 p-2 text-base text-[#666666] outline-none ring-offset-indigo-500 transition-all duration-200 ease-in-out focus:ring-2"
              />

              <button
                type="button"
                className="absolute right-0 top-0 z-50 p-2"
                onClick={() =>
                  setNewPasswordType((prev) =>
                    prev === 'password' ? 'text' : 'password',
                  )
                }
              >
                {newPasswordType === 'password' ? (
                  <i className="bx bx-show text-xl"></i>
                ) : (
                  <i className="bx bx-hide text-xl"></i>
                )}
              </button>
            </div>
            {/* {errors['newPassword'] && (
              <p className="text-xs text-red-700">
                {errors['newPassword'].message}
              </p>
            )} */}
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="confirmPassword" className="text-sm text-[#1A1A1A]">
              Confirm Password
            </label>
            <div className="relative w-full">
              <input
                type={confirmPasswordType === 'password' ? 'password' : 'text'}
                id="confirmPassword"
                name="confirmPassword"
                // {...register('confirmPassword')}
                // value={profile.confirmPassword}
                // onChange={handleOnChange}
                placeholder="Confirm New Password"
                className="absolute left-0 right-0 top-0 rounded-md border border-gray-200 p-2 text-base text-[#666666] outline-none ring-offset-indigo-500 transition-all duration-200 ease-in-out focus:ring-2"
              />
              <button
                type="button"
                className="absolute right-0 top-0 z-50 p-2"
                onClick={() =>
                  setConfirmPasswordType((prev) =>
                    prev === 'password' ? 'text' : 'password',
                  )
                }
              >
                {confirmPasswordType === 'password' ? (
                  <i className="bx bx-show text-xl"></i>
                ) : (
                  <i className="bx bx-hide text-xl"></i>
                )}
              </button>
            </div>
            {/* {errors['confirmPassword'] && (
              <p className="text-xs text-red-700">
                {errors['confirmPassword'].message}
              </p>
            )} */}
          </div>
        </div>

        <button
          type="submit"
          className="my-6 w-max rounded-full border-2 border-[#00B207] bg-[#00B207] px-10 py-2 font-semibold  text-white transition-all duration-200 ease-in-out hover:opacity-90"
        >
          Change Password
        </button>
      </form>
    </div>
  )
}
