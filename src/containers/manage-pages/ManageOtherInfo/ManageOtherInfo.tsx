import React from 'react';
import { MANAGE_PAGE_TITLE } from '../../../common/utils';
import Manage from '../../components/Manage';

function ManageOtherInfo() {
	return (
    <div>
      <Manage title={MANAGE_PAGE_TITLE.OTHER_INFO} />
    </div>
  )
}

export default ManageOtherInfo;
