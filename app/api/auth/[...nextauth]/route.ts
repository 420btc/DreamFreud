import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth';

// Para NextAuth v4, el manejador es más simple
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
