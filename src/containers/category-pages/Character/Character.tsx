import React from 'react';
import Result from '../../components/Result';
import { CATEGORY_ITEM_TITLE, RESULT_TYPE } from '../../../common/utils';

function Character() {
	return <Result title={CATEGORY_ITEM_TITLE.CHARACTER} type={RESULT_TYPE.CHARACTER} />;
}

export default Character;
