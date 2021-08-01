import profileContainer__direction from '../../styles/ProfileContainerDirection.module.css';
export default function ProfileContainerDirection(props){
	return (
	 <div className={profileContainer__direction.profileContainer__direction}>
                    <p>{props.profileContainer.firstText}</p>
                    <p>{props.profileContainer.secondText}</p>
                    </div>
	)
}