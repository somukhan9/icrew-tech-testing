import { useEffect, useRef } from 'react'

import classnames from 'classnames'

import styles from './index.module.css'

export default function LanguageSelectionDropDown({
  isOpenLanguageDropDown,
  languageSelectionDropDownOpenBtnRef,
  closeLanguageSelectionDropDown,
}) {
  const languageSelectionDropDownElementRef = useRef()

  useEffect(() => {
    const handleLanguageSelectionDropDown = (event) => {
      if (
        languageSelectionDropDownElementRef.current &&
        !languageSelectionDropDownElementRef.current.contains(event.target) &&
        languageSelectionDropDownOpenBtnRef.current &&
        !languageSelectionDropDownOpenBtnRef.current.contains(event.target)
      ) {
        closeLanguageSelectionDropDown()
      }
    }

    document.addEventListener('click', handleLanguageSelectionDropDown)

    return () => {
      document.removeEventListener('click', handleLanguageSelectionDropDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={languageSelectionDropDownElementRef}
      className={`${styles.languageSelectionDropDownContainer} ${classnames({
        'hidden scale-0': !isOpenLanguageDropDown,
        'block scale-100': isOpenLanguageDropDown,
      })}`}
    >
      <div className="mr-8 flex-col space-y-2 p-4">
        <button
          onClick={closeLanguageSelectionDropDown}
          className={styles.languageSelectBtn}
        >
          English
        </button>
        <button
          onClick={closeLanguageSelectionDropDown}
          className={styles.languageSelectBtn}
        >
          Bangla
        </button>
      </div>
    </div>
  )
}
