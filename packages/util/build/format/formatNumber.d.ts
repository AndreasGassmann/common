import { ToBn } from '../types';
import BN from 'bn.js';
export default function formatNumber<ExtToBn extends ToBn>(value?: ExtToBn | BN | number | null): string;
