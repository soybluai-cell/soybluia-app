import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className='flex min-h-screen items-center justify-center bg-blu-bg p-8'>
      <div className='max-w-md text-center'>
        <h1 className='text-2xl font-bold text-blu-on'>Bienvenido a SoyBluia</h1>
        <p className='mt-2 text-blu-on-variant'>Tu espacio de trabajo con IA</p>
        <div className='mt-6 flex justify-center gap-3'>
          <Link href='/chat' className='rounded-lg bg-blu-primary-solid px-4 py-2 text-white'>Ir al chat</Link>
          <Link href='/projects' className='rounded-lg border border-blu-outline/20 px-4 py-2 text-blu-on'>Proyectos</Link>
        </div>
      </div>
    </div>
  );
}
