import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { useAppDispatch } from '../../../store/hooks';
import { selectTheme } from '../../../store/app/selectors';
import { setItemData, setPageItemList, setFilter } from '../../../store/app/slices';
import { getAllPathNameService } from '../../../services/path/path.service';
import { OptionList } from '../../../common/interface/SelectOption.interface';
import './Filter.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Filter(props: any) {
	const theme = useSelector(selectTheme);

	const dispatch = useAppDispatch();
	const [selectOptionList, setSelectOptionList] = useState<any>({
		optionList: [],
		isLoading: true,
	});
	const [filterState, setFilterState] = useState(false);
	const [inputValue, setInputValue] = useState('');
	const [selectedPath, setSelectedPath] = useState(null);
	const [pathValue, setPathValue] = useState('');

	const getOptionList = async () => {
		const result = await getAllPathNameService();
		return result.data;
	};
	useEffect(() => {
		buildDataInputSelect();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		return () => {
			dispatch(setFilter({ search: '' }));
			dispatch(setItemData(null));
			dispatch(setPageItemList(null));
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const buildDataInputSelect = async () => {
		let result: any[] = [];
		const allPath = await getOptionList();
		if (allPath && allPath.length > 0) {
			// eslint-disable-next-line array-callback-return
			allPath.map((item: any) => {
				const object: OptionList = {
					label: '',
					value: '',
				};
				object.label = item.name;
				object.value = item.id;
				result.push(object);
			});
		}
		setSelectOptionList({
			optionList: result,
			isLoading: false,
		});
	};

	const handleOnChangeInput = (e: any, id: string) => {
		if (id === 'search') {
			setInputValue(e.target.value);
		}
		if (id === 'path') {
			setSelectedPath(e);
			setPathValue(e?.value);
		}
	};

	const handleChangeFilterState = () => {
		setFilterState(!filterState);
	};

	const handleClearFilter = async () => {
		setInputValue('');
		setSelectedPath(null);
		setPathValue('');
		dispatch(setFilter({ search: '' }));
		await props.getAll({ page: 1, limit: 10 });
	};

	const handleFilter = async () => {
		dispatch(setFilter({ search: inputValue, pathId: pathValue }));
		await props.getAll({ page: 1, limit: 10, search: inputValue, pathId: pathValue });
	};

	return (
		<>
			<div className={`item-filter ${theme} ${filterState === true ? '' : 'hide'}`}>
				<div className="filter-data">
					<div className="filter-row">
						<label>Tìm kiếm</label>
						<input
							type="text"
							placeholder=""
							className="search-input"
							value={inputValue}
							onChange={(e) => handleOnChangeInput(e, 'search')}
						/>
					</div>
					<div className="filter-row">
						<label>Lưu phái</label>
						<Select
							value={selectedPath}
							onChange={(e) => handleOnChangeInput(e, 'path')}
							options={selectOptionList.optionList}
							isLoading={selectOptionList.isLoading}
							isClearable={true}
							placeholder={''}
							className="select-path"
							name="selectedPath"
						/>
					</div>
				</div>
				<div className="filter-btn-wrapper">
					<div className="filter-btn" onClick={() => handleClearFilter()}>
						<span>Xóa</span>
					</div>
					<div className="filter-btn" onClick={() => handleFilter()}>
						<span>Tìm</span>
					</div>
				</div>
				<div className="filter-btn-state">
					<div className="btn-state" onClick={() => handleChangeFilterState()}>
						{filterState === true ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
					</div>
				</div>
			</div>
		</>
	);
}

export default Filter;
