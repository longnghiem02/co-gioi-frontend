import React, { useEffect, useState } from 'react';
import ReactModal from 'react-modal';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { selectInfoModalState, selectTheme } from '../../../../store/app/selectors';
import { useAppDispatch } from '../../../../store/hooks';
import { setInfoModalState } from '../../../../store/app/slices';
import { InfoModalStyles } from '../modal.styles';
import { getPathService } from '../../../../services/path/path.service';
import './InfoModal.scss';

function InfoModal(props: any) {
	const theme = useSelector(selectTheme);
	const dispatch = useAppDispatch();
	const infoModal = useSelector(selectInfoModalState);

	const [infoData, setInfoData] = useState<any>();
	const getInfoData = async () => {
		const result = await getPathService(props.id);
		setInfoData(result.data);
	};

	useEffect(() => {
    
		getInfoData();
	});

	const closeInfoModal = () => {
		dispatch(setInfoModalState(false));
	};

	return (
		<ReactModal isOpen={infoModal} style={InfoModalStyles} appElement={document.getElementById('root') as HTMLElement}>
			<div className={`info-modal ${theme}`}>
				<div className="modal-header">
					<div className="modal-header-wrapper">
						<div className="modal-icon">
							<span>
								<FontAwesomeIcon icon={faQuestionCircle} />
							</span>
						</div>
						<div className="modal-title">{infoData?.name}</div>
						<div className="modal-btn" onClick={() => closeInfoModal()}>
							<span>
								<FontAwesomeIcon icon={faXmark} />
							</span>
						</div>
					</div>
				</div>
				<div className="modal-content">
					<span>{infoData?.detail}</span>
				</div>
			</div>
		</ReactModal>
	);
}

export default InfoModal;
