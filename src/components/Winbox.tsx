import dynamic from 'next/dynamic';
export const WinBox = dynamic(() => import('react-winbox'), {ssr: false});