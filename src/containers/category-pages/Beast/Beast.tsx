import React from 'react';
import Result from '../../components/Result';
import { CATEGORY_ITEM_TITLE, RESULT_TYPE } from '../../../common/utils';

function Beast() {
	return <Result title={CATEGORY_ITEM_TITLE.BEAST} type={RESULT_TYPE.BEAST} />;
}

export default Beast;
