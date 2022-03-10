import React from 'react';

export function Match(props: React.PropsWithChildren<{ condition: boolean }>): JSX.Element {
	return <>{props.condition && props.children}</>;
}