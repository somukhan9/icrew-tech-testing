import ProfilePageContainer from '@/components/Profile/Container'
import styles from './page.module.css'
import PrivateRoute from '@/components/PrivateRoute'

export default function Profile() {
  return (
    <PrivateRoute>
      <section className={styles.profilePageContainer}>
        <ProfilePageContainer />
      </section>
    </PrivateRoute>
  )
}
