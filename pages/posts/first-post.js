import {LinkItem} from 'components/LinkItem.js'
import AdminShell from '../../components/AdminShell';

export default function FirstPost() {
    return(
        
        <div>
            <AdminShell>
            <h1>First Post</h1>
            <LinkItem label="Go home" link="/" />
            </AdminShell>
        </div>
        
    );
  }