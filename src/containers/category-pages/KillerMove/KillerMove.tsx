import React from 'react';
import Result from '../../components/Result';
import { CATEGORY_ITEM_TITLE, RESULT_TYPE } from '../../../common/utils';

function KillerMove() {
	return <Result title={CATEGORY_ITEM_TITLE.KILLER_MOVE} type={RESULT_TYPE.KILLER_MOVE} />;
}

export default KillerMove;
