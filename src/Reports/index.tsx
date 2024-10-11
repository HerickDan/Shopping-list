import { UserCard } from '../UserCard';
import {styles} from './style'

export const Reports = () => {
  return (
    <div style={styles.reportBox}>
      <h1 style={styles.title}>Relatos dos usuários</h1>
      <UserCard/>
    </div>
  );
};
