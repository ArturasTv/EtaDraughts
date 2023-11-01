import { Button, buttonVariants } from '@/components/ui/Button/Button';
import Icon, { IconNames } from '@/components/ui/Icon/Icon';
import { VariantProps } from 'class-variance-authority';

export interface ModalActionProps {
  label?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'];
  onClick: () => void;
  icon?: IconNames;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
  className?: string;
}

function ModalAction({
  label,
  variant = 'default',
  onClick,
  icon,
  type = 'button',
  isLoading,
  className,
}: ModalActionProps) {
  return (
    <Button
      variant={variant}
      onClick={onClick}
      isLoading={isLoading}
      className={className}
      type={type}
      size='sm'
    >
      {icon && !isLoading && <Icon name={icon} className='mr-2' />}
      {label}
    </Button>
  );
}

export default ModalAction;
