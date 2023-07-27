import {useForm} from 'react-hook-form';

export default function Contact() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .catch(error => console.error('Error:', error));
    };

    return (
        <section className="flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)} className="pt-12 grid grid-cols-2 gap-4 w-full max-w-2xl px-8" id="form">
                <input type="hidden" name="access_key" value="e94352a2-7279-424d-a4a7-6ce48945fda5" {...register('access_key')} />
                <div className="col-span-1 max-w-sm text-gray-900" id="name">
                    <label htmlFor="name" className="block text-md mb-2">Your Name</label>
                    <input name="from_name" required type="text" id="name" className="block w-full py-2 px-4 rounded-lg text-base mb-4 bg-secondary-isa" {...register('from_name')} />
                </div>
                <div className="col-span-1 text-gray-900" id="email">
                    <label htmlFor="email" className="block text-md mb-2">Your Email</label>
                    <input name="replyto" required type="email" id="email" className="block w-full py-2 px-4 rounded-lg text-base mb-4 bg-secondary-isa" {...register('replyto')} />
                </div>
                <div className="col-span-2 text-gray-900" id="message">
                    <label htmlFor="message" className="block text-md mb-2">Message</label>
                    <textarea name="message" required id="message" className="w-full resize-y h-24 py-2 px-4 rounded text-base bg-secondary-isa" {...register('message')} />
                </div>
                <input type="checkbox" name="botcheck" id="" style={{ display: "none" }} {...register('botcheck')} />
                <button className="justify-center col-span-2 py-3 px-5 text-lg cursor-pointer text-gray-900 mt-2 hover:scale-105 transition-transform duration-300">
                    <input type="submit" id="submit" value="Send" className="cursor-pointer"/>
                </button>

            </form>
        </section>
    );
}