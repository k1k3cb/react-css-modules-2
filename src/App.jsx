import Button from './components/button/Button';
import { SUMMARY } from './constants/summary';

const App = () => {
	return (
		<>
			<div className='cards-container'>
				<div className=' card-left'>
					<h3 className='card-left__title'>Your result</h3>
					<div className='card-left__result'>
						<p className='card-left__result--number'>76 </p>
						<p className='card-left__result--total'> of 100</p>
					</div>
					<h2 className='card-left__result-txt'>Great</h2>
					<p className='card-left__description'>
						Your performance exceed 65% of the people conducting the test here!
					</p>
				</div>
				<div className=' card-right'>
					<h3 className='card-right__title'>Summary</h3>
					<div className='summary-results'>
						{/* <div className='summary-results__container reaction'>
							<img src='/assets/images/icon-reaction.svg' alt='' />
							<p className='summary-results-title'>Reaction</p>
							<p className='summary-results-points'>
								80
								<span className='summary-results-points-total--span'>
									{' '}
									/ 100
								</span>
							</p>
						</div> */}
						{SUMMARY.map(item => (
							<div
								key={item.id}
								className={`summary-results__container ${item.bgColor}`}
							>
								<img src={item.icon} alt='' />
								<p className={`summary-results-title ${item.color}`}>{item.name}</p>
								<p className='summary-results-points'>
									{item.result}
									<span className='summary-results-points-total--span'>
										{' '}
										/ 100
									</span>
								</p>
							</div>
						))}
					</div>
					<Button />
				</div>
			</div>
		</>
	);
};

export default App;
