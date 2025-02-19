import {NextResponse} from "next/server";

export async function GET() {
    const agentId = "0aGXLIUb7vlmYq9qDtMl"
    const apiKey = "sk_4fcb0aa905d9a7bf904c5b1d4caded6768b824f8f8af874b"
    try {
        const response = await fetch(
            `https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${agentId}`,
            {
                method: 'GET',
                headers: {
                    'xi-api-key': apiKey,
                }
            }
        );

        if (!response.ok) {
            throw new Error('Failed to get signed URL');
        }

        const data = await response.json();
        return NextResponse.json({signedUrl: data.signed_url})
    } catch (error) {
        console.error('Error:', error);
        return NextResponse.json({ error: 'Failed to get signed URL' }, { status: 500 });
    }
}
