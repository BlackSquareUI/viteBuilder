import { createCSSBundle, getConfig } from "@blacksquareui/cssbuilder"

function blackSquareUI() {
    return {
        name: 'vite-plugin-blacksquareui',
        async transform(_code: string, id: string) {
            const { content, props } = await getConfig()

            if (id.endsWith(content.fileExtension)) {
                await createCSSBundle(content.sourceDir, content.fileExtension, props, content.outputFile)
            }
        },
    };
}
export { blackSquareUI }