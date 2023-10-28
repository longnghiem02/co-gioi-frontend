import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch } from '../../../../../store/hooks';
import { setInfoModalState, setItemData, setLoadingState } from '../../../../../store/app/slices';
import { getGuService } from '../../../../../services/gu/gu.service';
import { selectItemData } from '../../../../../store/app/selectors';
import images from '../../../../../assets/images';
import InfoModal from '../../../../components/Modal/InfoModal';
import '../ItemData.scss';

function GuData() {
	const id = useParams().id;
	const dispatch = useAppDispatch();

	const getGu = async (data: any) => {
		dispatch(setLoadingState(true));
		const result = await getGuService(data);
		if (result.data) {
			dispatch(setItemData(result.data));
		}
		dispatch(setLoadingState(false));
	};

	useEffect(() => {
		getGu(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		return () => {
			dispatch(setItemData(null));
			dispatch(setInfoModalState(false));
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const openInfoModal = () => {
		dispatch(setInfoModalState(true));
	};

	const itemData = useSelector(selectItemData);

	return (
		<div className="item-data">
			<div className="item-title">{itemData.name}</div>
			<div className="item-image">
				<img src={images.noImage} alt="" />
			</div>
			<div className="item-info">
				<div className="short-info">
					<div className="label">Lưu phái:</div>
					<div className="data">
						{itemData.path?.name}
						&nbsp;
						{itemData.path?.name ? (
							<span onClick={() => openInfoModal()}>
								<FontAwesomeIcon icon={faQuestionCircle} />
							</span>
						) : (
							''
						)}
					</div>
				</div>
				<div className="long-info">
					<div className="label">Mô tả:</div>
					<div className="data">{itemData.description}</div>
				</div>
				<div className="long-info">
					<div className="label">Thông tin chi tiết:</div>
					<div className="data">{itemData.detail}</div>
				</div>
			</div>
			<InfoModal id={itemData.path?.id} />
		</div>
	);
}

export default GuData;
