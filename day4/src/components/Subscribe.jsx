import Button from './Button';
import InputField from './InputField';
import Succes from './Success';
import WarningBox from './WarningBox';

export default function Subscribe() {
  return (
    <div className="subscribe">
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates</p>{' '}
      <WarningBox>
        <p>You are really loving JavaScript !</p>
      </WarningBox>
      <Succes>
        <p>But it's alrigth !</p>{' '}
      </Succes>
      <InputField />
      <Button>Subscribe</Button>
    </div>
  );
}
