import fs from 'fs'

/** Generate Data */
(function(){
    /** Generate List.json */
    const GenerateList = (type) => {
        let files = fs.readdirSync(`static/${type}/`);
        try {
            fs.writeFileSync(`static/${type}/list.json`, JSON.stringify(files));
            console.log(`✅ Successfully generate ${type} list!`);
        } catch (e) { console.log(e); }
    }

    /** Generate Lists */
    GenerateList('contributor')
    GenerateList('plugin')
    GenerateList('theme')
})()
