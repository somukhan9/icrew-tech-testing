import { useEffect, useRef } from 'react'

import classnames from 'classnames'

import styles from './index.module.css'

export default function LanguageSelectionDropDown({
  isOpenLanguageDropDown,
  languageSelectionDropDownOpenBtnRef,
  languageSelectionDropDownOpenPRef,
  languageSelectionDropDownOpenIRef,
  closeLanguageSelectionDropDown,
}) {
  const languageSelectionDropDownElementRef = useRef()

  useEffect(() => {
    window.addEventListener('click', function (e) {
      if (
        e.target !== languageSelectionDropDownOpenPRef.current &&
        e.target !== languageSelectionDropDownElementRef.current &&
        e.target !== languageSelectionDropDownOpenIRef.current &&
        e.target !== languageSelectionDropDownOpenBtnRef.current
      ) {
        closeLanguageSelectionDropDown()
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={languageSelectionDropDownElementRef}
      className={`${styles.languageSelectionDropDownContainer} ${classnames({
        'scale-0': !isOpenLanguageDropDown,
        'scale-1': isOpenLanguageDropDown,
      })}`}
    >
      <button
        className={styles.languageSelectionDropDownCloseBtn}
        onClick={closeLanguageSelectionDropDown}
      >
        <span className="text-md absolute right-2 text-xl font-bold">
          &times;
        </span>
      </button>
      <div className="mr-8 flex-col space-y-2 p-4">
        <button className={styles.languageSelectBtn}>English</button>
        <button className={styles.languageSelectBtn}>Bangla</button>
      </div>
    </div>
  )
}
