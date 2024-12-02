import { build, getBuildConfig } from "@blacksquareui/cssbuilder"

function blackSquareUI() {
    return {
        name: 'vite-plugin-blacksquareui',
        async transform(_code: string, id: string) {
            const { sourceDir, fileExtension, outputFile } = await getBuildConfig()
            if (id.endsWith(fileExtension)) {
                console.log(fileExtension)
                await build({ sourceDir, fileExtension, outputFile })
            }
        },
    };
}
export { blackSquareUI }