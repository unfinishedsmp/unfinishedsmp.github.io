const barrierIcon = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='35' stroke='%23ff5555' stroke-width='10' fill='none'/%3E%3Cline x1='25' y1='25' x2='75' y2='75' stroke='%23ff5555' stroke-width='10'/%3E%3C/svg%3E";
        
        window.handleIconError = function(img, blockId) {
            if (img.dataset.fallback === 'true') {
                img.dataset.fallback = 'false';
                
                function cdn(kind, id) {
                    return `https://cdn.jsdelivr.net/gh/InventivetalentDev/minecraft-assets@26.2/assets/minecraft/textures/${kind}/${encodeURIComponent(id)}.png`;
                }

                
                const forcePlaceholder = [
                    "chest", "trapped_chest", "ender_chest", 
                    "grindstone", "stonecutter",
                    "anvil", "chipped_anvil", "damaged_anvil", 
                    "conduit", "lightning_rod", "end_rod", 
                    "beacon", "heavy_core",
                ];
                
                if (forcePlaceholder.includes(blockId)) {
                    img.src = barrierIcon;
                    return;
                }

                
                const flatBlocks = {
                    "lily_pad": "lily_pad",
                    "vine": "vine",
                    "twisting_vines": "twisting_vines",
                    "weeping_vines": "weeping_vines",
                    "glow_lichen": "glow_lichen",
                    "moss_carpet": "moss_block",
                    "torch": "torch",
                    "soul_torch": "soul_torch",
                    "redstone_torch": "redstone_torch",
                    "lantern": "lantern",
                    "soul_lantern": "soul_lantern",
                    "rail": "rail",
                    "powered_rail": "powered_rail",
                    "detector_rail": "detector_rail",
                    "activator_rail": "activator_rail",
                    "ladder": "ladder",
                    "cobweb": "cobweb",
                    "sugar_cane": "sugar_cane",
                    "kelp": "kelp",
                    "sea_pickle": "sea_pickle",
                    "crimson_fungus": "crimson_fungus",
                    "warped_fungus": "warped_fungus",
                    "wither_rose": "wither_rose",
                    "lever": "lever",
                    "redstone_repeater": "repeater",
                    "redstone_comparator": "comparator",
                    "red_mushroom":"red_mushroom",
                    "brown_mushroom":"brown_mushroom",
                    "oak_trapdoor":"oak_trapdoor",
                    "birch_trapdoor":"birch_trapdoor",
                    "acacia_trapdoor":"acacia_trapdoor",
                    "cherry_trapdoor":"cherry_trapdoor",
                    "spruce_trapdoor":"spruce_trapdoor",
                    "dark_oak_trapdoor":"dark_oak_trapdoor",
                    "mangrove_trapdoor":"mangrove_trapdoor",
                    "jungle_trapdoor":"jungle_trapdoor",
                    "tripwire_hook":"tripwire_hook",
                    "book_and_quill": "writable_book",
                };
                
                if (blockId.endsWith("_pane")) flatBlocks[blockId] = blockId.replace("_pane", "");
                if (blockId.includes("candle")) flatBlocks[blockId] = blockId;
                
                if (flatBlocks[blockId]) {
                    let flatUrl = cdn('block', flatBlocks[blockId]);
                    let testImg = new Image();
                    testImg.crossOrigin = "anonymous";
                    testImg.onload = () => img.src = flatUrl;
                    testImg.onerror = () => img.src = barrierIcon;
                    testImg.src = flatUrl;
                    return; 
                }

                
                let faces = { top: blockId, right: blockId, left: blockId };
                
                if (blockId.endsWith("_log") || blockId.endsWith("_stem")) {
                    faces.top = blockId + "_top";
                }
                if (blockId.endsWith("_wood")) {
                    const base = blockId.replace("_wood", "_log");
                    faces = { top: base, right: base, left: base };
                }
                if (blockId.endsWith("_hyphae")) {
                    const base = blockId.replace("_hyphae", "_stem");
                    faces = { top: base, right: base, left: base };
                }

                const overrides = {
                    "grass_block": { top: "grass_block_top", right: "grass_block_side", left: "grass_block_side" },
                    "podzol": { top: "podzol_top", right: "podzol_side", left: "podzol_side" },
                    "mycelium": { top: "mycelium_top", right: "mycelium_side", left: "mycelium_side" },
                    "dirt_path": { top: "dirt_path_top", right: "dirt_path_side", left: "dirt_path_side" },
                    
                    "tnt": { top: "tnt_top", right: "tnt_side", left: "tnt_side" },
                    "magma_block": { top: "magma", right: "magma", left: "magma" },
                    "bone_block": { top: "bone_block_top", right: "bone_block_side", left: "bone_block_side" },
                    
                    "ancient_debris": { top: "ancient_debris_top", right: "ancient_debris_side", left: "ancient_debris_side" },
                    "basalt": { top: "basalt_top", right: "basalt_side", left: "basalt_side" },
                    "polished_basalt": { top: "polished_basalt_top", right: "polished_basalt_side", left: "polished_basalt_side" },
                    "hay_block": { top: "hay_block_top", right: "hay_block_side", left: "hay_block_side" },
                    "dried_kelp_block": { top: "dried_kelp_top", right: "dried_kelp_side", left: "dried_kelp_side" },
                    
                    "cactus": { top: "cactus_top", right: "cactus_side", left: "cactus_side" },
                    "sandstone": { top: "sandstone_top", right: "sandstone", left: "sandstone" },
                    "smooth_sandstone": { top: "sandstone_top", right: "sandstone_top", left: "sandstone_top" },
                    "red_sandstone": { top: "red_sandstone_top", right: "red_sandstone", left: "red_sandstone" },
                    "smooth_red_sandstone": { top: "red_sandstone_top", right: "red_sandstone_top", left: "red_sandstone_top" },
                    "cut_sandstone": { top: "sandstone_top", right: "cut_sandstone", left: "cut_sandstone" },
                    "cut_red_sandstone": { top: "red_sandstone_top", right: "cut_red_sandstone", left: "cut_red_sandstone" },
                    "chiseled_sandstone": { top: "sandstone_top", right: "chiseled_sandstone", left: "chiseled_sandstone" },
                    "chiseled_red_sandstone": { top: "red_sandstone_top", right: "chiseled_red_sandstone", left: "chiseled_red_sandstone" },
                    
                    "quartz_block": { top: "quartz_block_top", right: "quartz_block_side", left: "quartz_block_side" },
                    "chiseled_quartz_block": { top: "quartz_block_top", right: "chiseled_quartz_block", left: "chiseled_quartz_block" },
                    "quartz_pillar": { top: "quartz_pillar_top", right: "quartz_pillar_side", left: "quartz_pillar_side" },
                    "quartz_bricks": { top: "quartz_bricks", right: "quartz_bricks", left: "quartz_bricks" },
                    "smooth_quartz": { top: "quartz_block_bottom", right: "quartz_block_bottom", left: "quartz_block_bottom" },

                    "purpur_pillar": { top: "purpur_pillar_top", right: "purpur_pillar_side", left: "purpur_pillar_side" },

                    "melon": { top: "melon_top", right: "melon_side", left: "melon_side" },
                    "pumpkin": { top: "pumpkin_top", right: "pumpkin_side", left: "pumpkin_side" },
                    "jack_o_lantern": { top: "pumpkin_top", right: "jack_o_lantern", left: "pumpkin_side" },
                    
                    "dispenser": { top: "furnace_top", right: "furnace_side", left: "dispenser_front" },
                    "dropper": { top: "furnace_top", right: "furnace_side", left: "dropper_front" },
                    "observer": { top: "observer_top", right: "observer_front", left: "observer_side" },
                    "piston": { top: "piston_top", right: "piston_side", left: "piston_side" },
                    "sticky_piston": { top: "piston_top_sticky", right: "piston_side", left: "piston_side" },
                    "target_block": { top: "target_top", right: "target_side", left: "target_side" },
                    "slime_block": { top: "slime_block", right: "slime_block", left: "slime_block" },
                    "honey_block": { top: "honey_block_top", right: "honey_block_side", left: "honey_block_side" },
                    "redstone_lamp": { top: "redstone_lamp", right: "redstone_lamp", left: "redstone_lamp" },

                    "crafter": { top: "crafter_top", right: "crafter_north", left: "crafter_east" },
                    
                    "lodestone": { top: "lodestone_top", right: "lodestone_side", left: "lodestone_side" },
                    
                    //"stone_button": { top: "stone", right: "stone", left: "stone" },
                    //"oak_button": { top: "oak_planks", right: "oak_planks", left: "oak_planks" },
                    //"stone_pressure_plate": { top: "stone", right: "stone", left: "stone" },
                    //"oak_pressure_plate": { top: "oak_planks", right: "oak_planks", left: "oak_planks" },
                    
                    "jukebox": { top: "jukebox_top", right: "jukebox_side", left: "jukebox_side" },


                    "loom": { top: "loom_top", right: "loom_side", left: "loom_front" },
                    "fletching_table": { top: "fletching_table_top", right: "fletching_table_side", left: "fletching_table_front" },
                    "smithing_table": { top: "smithing_table_top", right: "smithing_table_side", left: "smithing_table_front" },
                    "barrel": { top: "barrel_top", right: "barrel_side", left: "barrel_side" },
                    "furnace": { top: "furnace_top", right: "furnace_side", left: "furnace_front" },
                    "blast_furnace": { top: "blast_furnace_top", right: "blast_furnace_side", left: "blast_furnace_front" },
                    "smoker": { top: "smoker_top", right: "smoker_side", left: "smoker_front" },
                    "composter": { top: "composter_top", right: "composter_side", left: "composter_side" },
                    "crafting_table": { top: "crafting_table_top", right: "crafting_table_side", left: "crafting_table_front" },
                    "cartography_table": { top: "cartography_table_top", right: "cartography_table_side1", left: "cartography_table_side2" },
                    "chiseled_bookshelf": { top: "chiseled_bookshelf_top", right: "chiseled_bookshelf_occupied", left: "chiseled_bookshelf_side" },
                    
                    "ochre_froglight": { top: "ochre_froglight_top", right: "ochre_froglight_side", left: "ochre_froglight_side" },
                    "verdant_froglight": { top: "verdant_froglight_top", right: "verdant_froglight_side", left: "verdant_froglight_side" },
                    "pearlescent_froglight": { top: "pearlescent_froglight_top", right: "pearlescent_froglight_side", left: "pearlescent_froglight_side" },
                    "respawn_anchor": { top: "respawn_anchor_top", right: "respawn_anchor_side0", left: "respawn_anchor_side0" },
                    "clay_block": { top: "clay", right: "clay", left: "clay" },

                    "oak_wood": { top: "oak_log", right: "oak_log", left: "oak_log" },
                    "spruce_wood": { top: "spruce_log", right: "spruce_log", left: "spruce_log" },
                    "birch_wood": { top: "birch_log", right: "birch_log", left: "birch_log" },
                    "jungle_wood": { top: "jungle_log", right: "jungle_log", left: "jungle_log" },
                    "acacia_wood": { top: "acacia_log", right: "acacia_log", left: "acacia_log" },
                    "dark_oak_wood": { top: "dark_oak_log", right: "dark_oak_log", left: "dark_oak_log" },
                    "mangrove_wood": { top: "mangrove_log", right: "mangrove_log", left: "mangrove_log" },
                    "cherry_wood": { top: "cherry_log", right: "cherry_log", left: "cherry_log" },
                    "pale_oak_wood": { top: "oak_log", right: "oak_log", left: "oak_log" },
                    "crimson_hyphae": { top: "crimson_stem", right: "crimson_stem", left: "crimson_stem" },
                    "warped_hyphae": { top: "warped_stem", right: "warped_stem", left: "warped_stem" },
                    
                    "oak_log": { top: "oak_log_top", right: "oak_log", left: "oak_log" },
                    "spruce_log": { top: "spruce_log_top", right: "spruce_log", left: "spruce_log" },
                    "birch_log": { top: "birch_log_top", right: "birch_log", left: "birch_log" },
                    "jungle_log": { top: "jungle_log_top", right: "jungle_log", left: "jungle_log" },
                    "acacia_log": { top: "acacia_log_top", right: "acacia_log", left: "acacia_log" },
                    "dark_oak_log": { top: "dark_oak_log_top", right: "dark_oak_log", left: "dark_oak_log" },
                    "mangrove_log": { top: "mangrove_log_top", right: "mangrove_log", left: "mangrove_log" },
                    "cherry_log": { top: "cherry_log_top", right: "cherry_log", left: "cherry_log" },
                    "pale_oak_log": { top: "oak_log_top", right: "oak_log", left: "oak_log" },
                    "crimson_stem": { top: "crimson_stem_top", right: "crimson_stem", left: "crimson_stem" },
                    "warped_stem": { top: "warped_stem_top", right: "warped_stem", left: "warped_stem" },

                    "hay_bale": { top: "hay_block_top", right: "hay_block_side", left: "hay_block_side"},
                };

                if (overrides[blockId]) faces = overrides[blockId];

                const topUrl = cdn('block', faces.top);
                const rightUrl = cdn('block', faces.right);
                const leftUrl = cdn('block', faces.left);

                let testImg = new Image();
                testImg.crossOrigin = "anonymous";
                testImg.onload = function() {
                    const parent = img.parentElement;
                    const cube = document.createElement('div');
                    cube.className = 'mc-cube';
                    
                    let topStyle = `background-image: url('${topUrl}');`;
                    if (blockId === "grass_block") {
                        topStyle += " filter: sepia(1) hue-rotate(70deg) saturate(3) brightness(0.8);";
                    }

                    cube.innerHTML = `
                        <div class="face top" style="${topStyle}"></div>
                        <div class="face right" style="background-image: url('${rightUrl}')"></div>
                        <div class="face left" style="background-image: url('${leftUrl}')"></div>
                    `;
                    parent.innerHTML = '';
                    parent.appendChild(cube);
                };
                testImg.onerror = function() {
                    img.src = barrierIcon;
                };
                testImg.src = rightUrl; 
            }
        };

        const rawCsvData = `
,"Stone, Earth & Masonry",Cobblestone,$0.25,$0.30
,,Stone,$0.25,$0.30
,,Smooth Stone,$0.30,$0.36
,,Stone Bricks,$0.25,$0.30
,,Mossy Stone Bricks,$0.30,$0.36
,,Cracked Stone Bricks,$0.25,$0.30
,,Chiseled Stone Bricks,$0.30,$0.36
,,Cobbled Deepslate,$0.30,$0.36
,,Deepslate,$0.30,$0.36
,,Deepslate Bricks,$0.35,$0.42
,,Deepslate Tiles,$0.35,$0.42
,,Chiseled Deepslate,$0.35,$0.42
,,Granite,$0.25,$0.30
,,Polished Granite,$0.30,$0.36
,,Diorite,$0.25,$0.30
,,Polished Diorite,$0.30,$0.36
,,Andesite,$0.25,$0.30
,,Polished Andesite,$0.30,$0.36
,,Tuff,$0.30,$0.36
,,Polished Tuff,$0.35,$0.42
,,Tuff Bricks,$0.35,$0.42
,,Chiseled Tuff,$0.35,$0.42
,,Calcite,$0.35,$0.42
,,Dripstone Block,$0.30,$0.36
,,Dirt,$0.05,$0.06
,,Grass Block,$0.08,$0.10
,,Coarse Dirt,$0.08,$0.10
,,Rooted Dirt,$0.12,$0.15
,,Podzol,$0.20,$0.24
,,Mycelium,$0.35,$0.42
,,Mud,$0.10,$0.12
,,Packed Mud,$0.20,$0.24
,,Moss Block,$0.20,$0.24
,,Moss Carpet,$0.05,$0.06
,,Gravel,$0.20,$0.24
,,Flint,$0.10,$0.12
,,Clay Ball,$0.10,$0.12
,,Clay Block,$0.40,$0.48
,,Brick (Item),$0.15,$0.18
,,Bricks (Block),$0.65,$0.78
,Sand & Glass,Sand,$0.25,$0.30
,,Red Sand,$0.30,$0.36
,,Sandstone,$1.00,$1.20
,,Cut Sandstone,$1.00,$1.20
,,Chiseled Sandstone,$1.05,$1.26
,,Smooth Sandstone,$1.10,$1.32
,,Red Sandstone,$1.20,$1.44
,,Cut Red Sandstone,$1.20,$1.44
,,Chiseled Red Sandstone,$1.25,$1.50
,,Smooth Red Sandstone,$1.30,$1.56
,,Glass,$0.30,$0.36
,,White Stained Glass,$0.35,$0.42
,,Orange Stained Glass,$0.35,$0.42
,,Magenta Stained Glass,$0.35,$0.42
,,Light Blue Stained Glass,$0.35,$0.42
,,Yellow Stained Glass,$0.35,$0.42
,,Lime Stained Glass,$0.35,$0.42
,,Pink Stained Glass,$0.35,$0.42
,,Gray Stained Glass,$0.35,$0.42
,,Light Gray Stained Glass,$0.35,$0.42
,,Cyan Stained Glass,$0.35,$0.42
,,Purple Stained Glass,$0.35,$0.42
,,Blue Stained Glass,$0.35,$0.42
,,Brown Stained Glass,$0.35,$0.42
,,Green Stained Glass,$0.35,$0.42
,,Red Stained Glass,$0.35,$0.42
,,Black Stained Glass,$0.35,$0.42
,,Glass Pane,$0.08,$0.10
,Wood & Forestry,Oak Log,$0.30,$0.36
,,Oak Wood,$0.30,$0.36
,,Oak Planks,$0.30,$0.36
,,Spruce Log,$0.30,$0.36
,,Spruce Wood,$0.30,$0.36
,,Spruce Planks,$0.30,$0.36
,,Birch Log,$0.30,$0.36
,,Birch Wood,$0.30,$0.36
,,Birch Planks,$0.30,$0.36
,,Jungle Log,$0.35,$0.42
,,Jungle Wood,$0.35,$0.42
,,Jungle Planks,$0.35,$0.42
,,Acacia Log,$0.30,$0.36
,,Acacia Wood,$0.30,$0.36
,,Acacia Planks,$0.30,$0.36
,,Dark Oak Log,$0.35,$0.42
,,Dark Oak Wood,$0.35,$0.42
,,Dark Oak Planks,$0.35,$0.42
,,Mangrove Log,$0.40,$0.48
,,Mangrove Wood,$0.40,$0.48
,,Mangrove Planks,$0.40,$0.48
,,Cherry Log,$0.40,$0.48
,,Cherry Wood,$0.40,$0.48
,,Cherry Planks,$0.40,$0.48
,,Pale Oak Log,$0.35,$0.42
,,Pale Oak Wood,$0.35,$0.42
,,Pale Oak Planks,$0.35,$0.42
,,Crimson Stem,$0.50,$0.60
,,Crimson Hyphae,$0.50,$0.60
,,Crimson Planks,$0.50,$0.60
,,Warped Stem,$0.50,$0.60
,,Warped Hyphae,$0.50,$0.60
,,Warped Planks,$0.50,$0.60
,Crops & Agriculture,Wheat,$0.20,$0.24
,,Carrot,$0.20,$0.24
,,Potato,$0.20,$0.24
,,Beetroot,$0.15,$0.18
,,Sugar Cane,$0.30,$0.36
,,Bamboo,$0.05,$0.06
,,Cactus,$0.08,$0.10
,,Kelp,$0.03,$0.04
,,Cocoa Beans,$0.25,$0.30
,,Nether Wart,$0.40,$0.48
,,Sweet Berries,$0.10,$0.12
,,Glow Berries,$0.15,$0.18
,,Apple,$0.30,$0.36
,,Melon Slice,$0.03,$0.04
,,Melon Block,$0.27,$0.33
,,Pumpkin,$0.25,$0.30
,,Pumpkin Pie,$0.50,$0.60
,,Chorus Fruit,$0.40,$0.48
,,Chorus Flower,$0.75,$0.90
,,Lily Pad,$0.20,$0.24
,,Sea Pickle,$0.35,$0.42
,,Vine,$0.05,$0.06
,,Glow Lichen,$0.05,$0.06
,,Small Dripleaf,$0.20,$0.24
,,Big Dripleaf,$0.35,$0.42
,,Mangrove Propagule,$0.20,$0.24
,,Torchflower Seeds,$0.25,$0.30
,,Pitcher Pod,$0.50,$0.60
,,Brown Mushroom,$0.20,$0.24
,,Red Mushroom,$0.20,$0.24
,Animal Products,Leather,$0.35,$0.42
,,Feather,$0.03,$0.04
,,Egg,$0.02,$0.03
,,Turtle Egg,$2.00,$2.40
,,Sniffer Egg,$25.00,$30.00
,,White Wool,$0.15,$0.18
,,Orange Wool,$0.15,$0.18
,,Magenta Wool,$0.15,$0.18
,,Light Blue Wool,$0.15,$0.18
,,Yellow Wool,$0.15,$0.18
,,Lime Wool,$0.15,$0.18
,,Pink Wool,$0.15,$0.18
,,Gray Wool,$0.15,$0.18
,,Light Gray Wool,$0.15,$0.18
,,Cyan Wool,$0.15,$0.18
,,Purple Wool,$0.15,$0.18
,,Blue Wool,$0.15,$0.18
,,Brown Wool,$0.15,$0.18
,,Green Wool,$0.15,$0.18
,,Red Wool,$0.15,$0.18
,,Black Wool,$0.15,$0.18
,,Rabbit Hide,$0.10,$0.12
,,Rabbit Foot,$0.75,$0.90
,,Honeycomb,$0.15,$0.18
,,Honey Bottle,$0.35,$0.42
,,Honey Block,$1.40,$1.68
,,Goat Horn,$3.00,$3.60
,,Turtle Scute,$1.00,$1.20
,,Armadillo Scute,$0.75,$0.90
,,Raw Beef,$0.30,$0.36
,,Raw Porkchop,$0.30,$0.36
,,Raw Chicken,$0.20,$0.24
,,Raw Mutton,$0.30,$0.36
,,Raw Rabbit,$0.40,$0.48
,,Raw Cod,$0.10,$0.12
,,Raw Salmon,$0.15,$0.18
,,Tropical Fish,$0.40,$0.48
,,Pufferfish,$0.50,$0.60
,Cooked Food,Bread,$0.80,$0.96
,,Baked Potato,$0.30,$0.36
,,Cooked Beef (Steak),$0.40,$0.48
,,Cooked Porkchop,$0.40,$0.48
,,Cooked Chicken,$0.30,$0.36
,,Cooked Mutton,$0.40,$0.48
,,Cooked Rabbit,$0.50,$0.60
,,Cooked Cod,$0.20,$0.24
,,Cooked Salmon,$0.25,$0.30
,,Rabbit Stew,$2.00,$2.40
,,Mushroom Stew,$0.75,$0.90
,,Beetroot Soup,$0.60,$0.72
,,Suspicious Stew,$3.00,$3.60
,,Pumpkin Pie,$0.50,$0.60
,,Cookie,$0.20,$0.24
,,Cake,$8.00,$9.60
,,Dried Kelp,$0.05,$0.06
,,Golden Apple,$15.00,$18.00
,,Enchanted Golden Apple,$500.00,$600.00
,Ores & Minerals,Coal,$0.20,$0.24
,,Coal Block,$1.80,$2.16
,,Charcoal,$0.20,$0.24
,,Raw Iron,$0.50,$0.60
,,Iron Ingot,$0.60,$0.72
,,Iron Block,$5.40,$6.48
,,Raw Gold,$0.80,$0.96
,,Gold Ingot,$1.00,$1.20
,,Gold Block,$9.00,$10.80
,,Raw Copper,$0.35,$0.42
,,Copper Ingot,$0.40,$0.48
,,Copper Block,$3.60,$4.32
,,Redstone Dust,$0.40,$0.48
,,Redstone Block,$3.60,$4.32
,,Lapis Lazuli,$0.60,$0.72
,,Lapis Block,$5.40,$6.48
,,Diamond,$5.00,$6.00
,,Diamond Block,$45.00,$54.00
,,Emerald,$4.00,$4.80
,,Emerald Block,$36.00,$43.20
,,Nether Quartz,$0.75,$0.90
,,Quartz Block,$3.00,$3.60
,,Quartz Bricks,$3.15,$3.78
,,Chiseled Quartz Block,$3.15,$3.78
,,Quartz Pillar,$3.15,$3.78
,,Smooth Quartz,$3.25,$3.90
,,Amethyst Shard,$0.75,$0.90
,,Amethyst Block,$3.00,$3.60
,,Budding Amethyst,$100.00,$120.00
,,Calcite,$0.35,$0.42
,,Tuff,$0.30,$0.36
,,Flint,$0.10,$0.12
,,Ancient Debris,$15.00,$18.00
,,Netherite Scrap,$12.00,$14.40
,,Netherite Ingot,$60.00,$72.00
,Ocean Resources,Prismarine Shard,$0.10,$0.12
,,Prismarine Crystal,$0.20,$0.24
,,Prismarine,$0.50,$0.60
,,Prismarine Bricks,$0.75,$0.90
,,Dark Prismarine,$1.00,$1.20
,,Sea Lantern,$1.50,$1.80
,,Sponge,$2.00,$2.40
,,Wet Sponge,$2.00,$2.40
,,Nautilus Shell,$3.00,$3.60
,,Heart of the Sea,$20.00,$24.00
,,Turtle Scute,$1.00,$1.20
,,Turtle Egg,$2.00,$2.40
,,Sea Pickle,$0.35,$0.42
,,Kelp,$0.03,$0.04
,,Dried Kelp Block,$0.27,$0.33
,,Tube Coral Block,$2.00,$2.40
,,Brain Coral Block,$2.00,$2.40
,,Bubble Coral Block,$2.00,$2.40
,,Fire Coral Block,$2.00,$2.40
,,Horn Coral Block,$2.00,$2.40
,,Dead Tube Coral Block,$0.50,$0.60
,,Dead Brain Coral Block,$0.50,$0.60
,,Dead Bubble Coral Block,$0.50,$0.60
,,Dead Fire Coral Block,$0.50,$0.60
,,Dead Horn Coral Block,$0.50,$0.60
,,Lily Pad,$0.20,$0.24
,,Clay Ball,$0.10,$0.12
,,Clay Block,$0.40,$0.48
,,Scute,$1.00,$1.20
,Nether Resources,Netherrack,$0.15,$0.18
,,Soul Sand,$0.20,$0.24
,,Soul Soil,$0.15,$0.18
,,Magma Block,$0.25,$0.30
,,Blackstone,$0.25,$0.30
,,Polished Blackstone,$0.30,$0.36
,,Polished Blackstone Bricks,$0.30,$0.36
,,Chiseled Polished Blackstone,$0.35,$0.42
,,Gilded Blackstone,$0.75,$0.90
,,Basalt,$0.20,$0.24
,,Smooth Basalt,$0.25,$0.30
,,Nether Bricks (Item),$0.20,$0.24
,,Nether Bricks (Block),$0.80,$0.96
,,Red Nether Bricks,$0.90,$1.08
,,Glowstone Dust,$0.15,$0.18
,,Glowstone,$0.60,$0.72
,,Nether Quartz,$0.75,$0.90
,,Quartz Block,$3.00,$3.60
,,Quartz Bricks,$3.15,$3.78
,,Chiseled Quartz Block,$3.15,$3.78
,,Quartz Pillar,$3.15,$3.78
,,Smooth Quartz,$3.25,$3.90
,,Nether Wart,$0.40,$0.48
,,Nether Wart Block,$3.60,$4.32
,,Crimson Stem,$0.50,$0.60
,,Warped Stem,$0.50,$0.60
,,Crimson Hyphae,$0.50,$0.60
,,Warped Hyphae,$0.50,$0.60
,,Crimson Planks,$0.50,$0.60
,,Warped Planks,$0.50,$0.60
,,Crimson Fungus,$0.25,$0.30
,,Warped Fungus,$0.25,$0.30
,,Shroomlight,$1.00,$1.20
,,Weeping Vines,$0.10,$0.12
,,Twisting Vines,$0.10,$0.12
,,Ancient Debris,$15.00,$18.00
,,Netherite Scrap,$12.00,$14.40
,,Netherite Ingot,$60.00,$72.00
,Mob Drops,Rotten Flesh,$0.01,$0.02
,,Bone,$0.05,$0.06
,,Bone Meal,$0.03,$0.04
,,String,$0.08,$0.10
,,Spider Eye,$0.05,$0.06
,,Fermented Spider Eye,$0.15,$0.18
,,Gunpowder,$0.40,$0.48
,,Arrow,$0.02,$0.03
,,Slime Ball,$0.25,$0.30
,,Magma Cream,$0.50,$0.60
,,Ender Pearl,$0.75,$0.90
,,Blaze Rod,$1.00,$1.20
,,Blaze Powder,$0.40,$0.48
,,Ghast Tear,$2.00,$2.40
,,Phantom Membrane,$1.50,$1.80
,,Ink Sac,$0.20,$0.24
,,Glow Ink Sac,$0.40,$0.48
,,Rabbit Foot,$0.75,$0.90
,,Turtle Scute,$1.00,$1.20
,,Armadillo Scute,$0.75,$0.90
,,Wither Rose,$2.00,$2.40
,,Wither Skeleton Skull,$20.00,$24.00
,,Shulker Shell,$12.00,$14.40
,,Echo Shard,$25.00,$30.00
,,Totem of Undying,$50.00,$60.00
,,Ominous Bottle I,$2.00,$2.40
,,Ominous Bottle II,$4.00,$4.80
,,Ominous Bottle III,$8.00,$9.60
,,Ominous Bottle IV,$16.00,$19.20
,,Ominous Bottle V,$32.00,$38.40
,,Nether Star,$100.00,$120.00
,End Resources,End Stone,$0.40,$0.48
,,End Stone Bricks,$0.45,$0.54
,,Purpur Block,$1.20,$1.44
,,Purpur Pillar,$1.20,$1.44
,,Popped Chorus Fruit,$0.50,$0.60
,,Chorus Fruit,$0.40,$0.48
,,Chorus Flower,$0.75,$0.90
,,Chorus Plant,$0.60,$0.72
,,End Rod,$2.00,$2.40
,,Obsidian,$1.00,$1.20
,,Crying Obsidian,$5.00,$6.00
,,Respawn Anchor,$25.00,$30.00
,,Dragon's Breath,$10.00,$12.00
,,Dragon Head,$250.00,$300.00
,,End Crystal,$15.00,$18.00
,,Ender Chest,$12.00,$14.40
,,Shulker Box,$18.00,$21.60
,Redstone & Utility,Redstone Torch,$0.45,$0.54
,,Redstone Repeater,$2.00,$2.40
,,Redstone Comparator,$3.50,$4.20
,,Observer,$3.00,$3.60
,,Piston,$2.50,$3.00
,,Sticky Piston,$3.00,$3.60
,,Slime Block,$2.25,$2.70
,,Honey Block,$1.40,$1.68
,,Target Block,$0.75,$0.90
,,Lever,$0.40,$0.48
,,Stone Button,$0.30,$0.36
,,Oak Button,$0.35,$0.42
,,Stone Pressure Plate,$0.60,$0.72
,,Oak Pressure Plate,$0.60,$0.72
,,Daylight Detector,$5.00,$6.00
,,Hopper,$8.00,$9.60
,,Dropper,$1.50,$1.80
,,Dispenser,$2.00,$2.40
,,Crafter,$10.00,$12.00
,,Chest,$1.20,$1.44
,,Trapped Chest,$1.75,$2.10
,,Barrel,$1.50,$1.80
,,Furnace,$2.00,$2.40
,,Blast Furnace,$8.00,$9.60
,,Smoker,$3.00,$3.60
,,Stonecutter,$2.00,$2.40
,,Grindstone,$2.50,$3.00
,,Smithing Table,$4.00,$4.80
,,Cartography Table,$2.00,$2.40
,,Loom,$2.00,$2.40
,,Fletching Table,$2.00,$2.40
,,Crafting Table,$1.50,$1.80
,,Anvil,$35.00,$42.00
,,Chipped Anvil,$25.00,$30.00
,,Damaged Anvil,$15.00,$18.00
,,Beacon,$250.00,$300.00
,,Lodestone,$80.00,$96.00
,,Bell,$10.00,$12.00
,,Conduit,$35.00,$42.00
,,Jukebox,$12.00,$14.40
,,Note Block,$2.50,$3.00
,,Bookshelf,$8.00,$9.60
,,Chiseled Bookshelf,$10.00,$12.00
,,Composter,$1.50,$1.80
,,Campfire,$2.50,$3.00
,,Soul Campfire,$3.00,$3.60
,,Cauldron,$5.00,$6.00
,,Lightning Rod,$4.00,$4.80
,,Respawn Anchor,$25.00,$30.00
,Lighting,Torch,$0.15,$0.18
,,Soul Torch,$0.20,$0.24
,,Lantern,$1.25,$1.50
,,Soul Lantern,$1.50,$1.80
,,Campfire,$2.50,$3.00
,,Soul Campfire,$3.00,$3.60
,,Candle (White),$0.75,$0.90
,,Candle (Orange),$0.75,$0.90
,,Candle (Magenta),$0.75,$0.90
,,Candle (Light Blue),$0.75,$0.90
,,Candle (Yellow),$0.75,$0.90
,,Candle (Lime),$0.75,$0.90
,,Candle (Pink),$0.75,$0.90
,,Candle (Gray),$0.75,$0.90
,,Candle (Light Gray),$0.75,$0.90
,,Candle (Cyan),$0.75,$0.90
,,Candle (Purple),$0.75,$0.90
,,Candle (Blue),$0.75,$0.90
,,Candle (Brown),$0.75,$0.90
,,Candle (Green),$0.75,$0.90
,,Candle (Red),$0.75,$0.90
,,Candle (Black),$0.75,$0.90
,,Sea Lantern,$1.50,$1.80
,,Glowstone,$0.60,$0.72
,,Shroomlight,$1.00,$1.20
,,Redstone Lamp,$4.00,$4.80
,,Jack o'Lantern,$1.50,$1.80
,,End Rod,$2.00,$2.40
,,Beacon,$250.00,$300.00
,,Ochre Froglight,$6.00,$7.20
,,Verdant Froglight,$6.00,$7.20
,,Pearlescent Froglight,$6.00,$7.20
,,Glow Item Frame,$3.00,$3.60
,,Glow Ink Sac,$0.40,$0.48
,Brewing & Alchemy,Glass Bottle,$0.10,$0.12
,,Water Bottle,$0.15,$0.18
,,Nether Wart,$0.40,$0.48
,,Blaze Powder,$0.40,$0.48
,,Blaze Rod,$1.00,$1.20
,,Ghast Tear,$2.00,$2.40
,,Magma Cream,$0.50,$0.60
,,Rabbit Foot,$0.75,$0.90
,,Fermented Spider Eye,$0.15,$0.18
,,Spider Eye,$0.05,$0.06
,,Sugar,$0.15,$0.18
,,Glistering Melon Slice,$1.00,$1.20
,,Golden Carrot,$1.50,$1.80
,,Phantom Membrane,$1.50,$1.80
,,Turtle Helmet (Reference),$35.00,$42.00
,,Turtle Scute,$1.00,$1.20
,,Pufferfish,$0.50,$0.60
,,Glowstone Dust,$0.15,$0.18
,,Redstone Dust,$0.40,$0.48
,,Dragon's Breath,$10.00,$12.00
,,Gunpowder,$0.40,$0.48
,,Brewing Stand,$3.00,$3.60
,,Cauldron,$5.00,$6.00
,,Awkward Potion,$2.00,$2.40
,,Mundane Potion,$1.00,$1.20
,,Thick Potion,$1.00,$1.20
,,Potion of Healing,$5.00,$6.00
,,Potion of Regeneration,$6.00,$7.20
,,Potion of Swiftness,$5.00,$6.00
,,Potion of Fire Resistance,$6.00,$7.20
,,Potion of Water Breathing,$6.00,$7.20
,,Potion of Night Vision,$6.00,$7.20
,,Potion of Strength,$7.00,$8.40
,,Potion of Slow Falling,$8.00,$9.60
,Enchanting,Aqua Affinity I,$75.00,$90.00
,,Bane of Arthropods V,$125.00,$150.00
,,Blast Protection IV,$150.00,$180.00
,,Breach IV,$250.00,$300.00
,,Channeling I,$100.00,$120.00
,,Curse of Binding I,$30.00,$36.00
,,Curse of Vanishing I,$30.00,$36.00
,,Density V,$300.00,$360.00
,,Depth Strider III,$150.00,$180.00
,,Efficiency V,$175.00,$210.00
,,Feather Falling IV,$175.00,$210.00
,,Fire Aspect II,$125.00,$150.00
,,Fire Protection IV,$125.00,$150.00
,,Flame I,$100.00,$120.00
,,Fortune III,$250.00,$300.00
,,Frost Walker II,$175.00,$210.00
,,Impaling V,$175.00,$210.00
,,Infinity I,$250.00,$300.00
,,Knockback II,$100.00,$120.00
,,Looting III,$250.00,$300.00
,,Loyalty III,$175.00,$210.00
,,Luck of the Sea III,$150.00,$180.00
,,Lure III,$125.00,$150.00
,,Mending I,$500.00,$600.00
,,Multishot I,$100.00,$120.00
,,Piercing IV,$150.00,$180.00
,,Power V,$200.00,$240.00
,,Projectile Protection IV,$125.00,$150.00
,,Protection IV,$200.00,$240.00
,,Punch II,$125.00,$150.00
,,Quick Charge III,$150.00,$180.00
,,Respiration III,$125.00,$150.00
,,Riptide III,$175.00,$210.00
,,Sharpness V,$250.00,$300.00
,,Silk Touch I,$350.00,$420.00
,,Smite V,$125.00,$150.00
,,Soul Speed III,$300.00,$360.00
,,Swift Sneak III,$350.00,$420.00
,,Sweeping Edge III (Java),$175.00,$210.00
,,Thorns III,$125.00,$150.00
,,Unbreaking III,$200.00,$240.00
,,Wind Burst III,$350.00,$420.00
,,Book,$0.60,$0.72
,,Bookshelf,$8.00,$9.60
,,Chiseled Bookshelf,$10.00,$12.00
,,Enchanting Table,$75.00,$90.00
,,Lapis Lazuli,$0.60,$0.72
,,Experience Bottle,$12.00,$14.40
,,Anvil,$35.00,$42.00
,,Grindstone,$2.50,$3.00
,,Smithing Table,$4.00,$4.80
,Music & Treasure,Music Disc 13,$25.00,$30.00
,,Music Disc Cat,$25.00,$30.00
,,Music Disc Blocks,$35.00,$42.00
,,Music Disc Chirp,$35.00,$42.00
,,Music Disc Far,$40.00,$48.00
,,Music Disc Mall,$35.00,$42.00
,,Music Disc Mellohi,$35.00,$42.00
,,Music Disc Stal,$35.00,$42.00
,,Music Disc Strad,$40.00,$48.00
,,Music Disc Ward,$50.00,$60.00
,,Music Disc 11,$75.00,$90.00
,,Music Disc Wait,$60.00,$72.00
,,Music Disc Pigstep,$300.00,$360.00
,,Music Disc Otherside,$250.00,$300.00
,,Music Disc 5,$200.00,$240.00
,,Music Disc Relic,$350.00,$420.00
,,Music Disc Creator,$175.00,$210.00
,,Music Disc Creator (Music Box),$200.00,$240.00
,,Banner Pattern (Flower Charge),$50.00,$60.00
,,Banner Pattern (Creeper Charge),$100.00,$120.00
,,Banner Pattern (Skull Charge),$125.00,$150.00
,,Banner Pattern (Globe),$200.00,$240.00
,,Banner Pattern (Piglin),$150.00,$180.00
,,Banner Pattern (Flow),$250.00,$300.00
,,Banner Pattern (Guster),$250.00,$300.00
,,Disc Fragment,$20.00,$24.00
,,Recovery Compass,$100.00,$120.00
,,Compass,$5.00,$6.00
,,Clock,$10.00,$12.00
,,Name Tag,$50.00,$60.00
,,Saddle,$40.00,$48.00
,,Lead,$4.00,$4.80
,,Bundle,$20.00,$24.00
,,Trial Key,$75.00,$90.00
,,Ominous Trial Key,$200.00,$240.00
,Archaeology & Trial Chamber,Decorated Pot,$12.00,$14.40
,,Brick (Pot Ingredient),$0.15,$0.18
,,Archer Pottery Sherd,$35.00,$42.00
,,Arms Up Pottery Sherd,$35.00,$42.00
,,Blade Pottery Sherd,$35.00,$42.00
,,Brewer Pottery Sherd,$35.00,$42.00
,,Burn Pottery Sherd,$35.00,$42.00
,,Danger Pottery Sherd,$35.00,$42.00
,,Explorer Pottery Sherd,$40.00,$48.00
,,Flow Pottery Sherd,$50.00,$60.00
,,Friend Pottery Sherd,$35.00,$42.00
,,Guster Pottery Sherd,$50.00,$60.00
,,Heart Pottery Sherd,$40.00,$48.00
,,Heartbreak Pottery Sherd,$40.00,$48.00
,,Howl Pottery Sherd,$35.00,$42.00
,,Miner Pottery Sherd,$35.00,$42.00
,,Mourner Pottery Sherd,$35.00,$42.00
,,Plenty Pottery Sherd,$35.00,$42.00
,,Prize Pottery Sherd,$40.00,$48.00
,,Scrape Pottery Sherd,$35.00,$42.00
,,Sheaf Pottery Sherd,$35.00,$42.00
,,Shelter Pottery Sherd,$35.00,$42.00
,,Skull Pottery Sherd,$40.00,$48.00
,,Snort Pottery Sherd,$40.00,$48.00
,,Flow Armor Trim,$500.00,$600.00
,,Bolt Armor Trim,$500.00,$600.00
,,Heavy Core,$750.00,$900.00
,,Breeze Rod,$20.00,$28.00
,,Wind Charge,$5.00,$6.00
,Utility & Travel,Compass,$5.00,$6.00
,,Recovery Compass,$100.00,$120.00
,,Clock,$10.00,$12.00
,,Empty Map,$8.00,$9.60
,,Map,$8.00,$9.60
,,Locator Map,$10.00,$12.00
,,Name Tag,$50.00,$60.00
,,Saddle,$40.00,$48.00
,,Lead,$4.00,$4.80
,,Bundle,$20.00,$24.00
,,Ender Chest,$12.00,$14.40
,,Shulker Box,$18.00,$21.60
,,Minecart,$8.00,$9.60
,,Chest Minecart,$10.00,$12.00
,,Hopper Minecart,$16.00,$19.20
,,Furnace Minecart,$10.00,$12.00
,,TNT Minecart,$12.00,$14.40
,,Totem of Undying,$50.00,$60.00
,,Elytra,$500.00,$600.00
        `; 

        const craftingRecipes = [

            { output: "Stick", yield: 4, ingredients: [{ name: "Oak Planks", count: 2 }] },
            /*{ output: "Stick", yield: 4, ingredients: [{ name: "Pale Oak Planks", count: 2 }] },
            { output: "Stick", yield: 4, ingredients: [{ name: "Dark Oak Planks", count: 2 }] },
            { output: "Stick", yield: 4, ingredients: [{ name: "Birch Planks", count: 2 }] },
            { output: "Stick", yield: 4, ingredients: [{ name: "Spruce Planks", count: 2 }] },
            { output: "Stick", yield: 4, ingredients: [{ name: "Jungle Planks", count: 2 }] },
            { output: "Stick", yield: 4, ingredients: [{ name: "Mangrove Planks", count: 2 }] },
            { output: "Stick", yield: 4, ingredients: [{ name: "Cherry Planks", count: 2 }] },
            { output: "Stick", yield: 4, ingredients: [{ name: "Acacia Planks", count: 2 }] },*/
            { output: "Stick", yield: 1, ingredients: [{ name: "Bamboo", count: 2 }] },

            //Tools
            { output: "Wooden Pickaxe", yield: 1, ingredients: [{ name: "Oak Planks", count: 3 }, { name: "Stick", count: 2 }] },
            { output: "Stone Pickaxe", yield: 1, ingredients: [{ name: "Cobblestone", count: 3 }, { name: "Stick", count: 2 }] },
            { output: "Iron Pickaxe", yield: 1, ingredients: [{ name: "Iron Ingot", count: 3 }, { name: "Stick", count: 2 }] },
            { output: "Diamond Pickaxe", yield: 1, ingredients: [{ name: "Diamond", count: 3 }, { name: "Stick", count: 2 }] },
            { output: "Netherite Pickaxe", yield: 1, ingredients: [{ name: "Diamond Pickaxe", count: 1 }, { name: "Netherite Ingot", count: 1 }] },

            { output: "Wooden Sword", yield: 1, ingredients: [{ name: "Oak Planks", count: 2 }, { name: "Stick", count: 1 }] },
            { output: "Stone Sword", yield: 1, ingredients: [{ name: "Cobblestone", count: 2 }, { name: "Stick", count: 1 }] },
            { output: "Iron Sword", yield: 1, ingredients: [{ name: "Iron Ingot", count: 2 }, { name: "Stick", count: 1 }] },
            { output: "Diamond Sword", yield: 1, ingredients: [{ name: "Diamond", count: 2 }, { name: "Stick", count: 1 }] },

            { output: "Bow", yield: 1, ingredients: [{ name: "Stick", count: 3 }, { name: "String", count: 3 }] },
            { output: "Fishing Rod", yield: 1, ingredients: [{ name: "Stick", count: 3 }, { name: "String", count: 2 }] },
            { output: "Shield", yield: 1, ingredients: [{ name: "Oak Planks", count: 6 }, { name: "Iron Ingot", count: 1 }] },
            { output: "Shears", yield: 1, ingredients: [{ name: "Iron Ingot", count: 2 }] },
            { output: "Flint and Steel", yield: 1, ingredients: [{ name: "Iron Ingot", count: 1 }, { name: "Flint", count: 1 }] },

            //Armor
            { output: "Iron Helmet", yield: 1, ingredients: [{ name: "Iron Ingot", count: 5 }] },
            { output: "Iron Chestplate", yield: 1, ingredients: [{ name: "Iron Ingot", count: 8 }] },
            { output: "Iron Leggings", yield: 1, ingredients: [{ name: "Iron Ingot", count: 7 }] },
            { output: "Iron Boots", yield: 1, ingredients: [{ name: "Iron Ingot", count: 4 }] },
            { output: "Diamond Helmet", yield: 1, ingredients: [{ name: "Diamond", count: 5 }] },
            { output: "Diamond Chestplate", yield: 1, ingredients: [{ name: "Diamond", count: 8 }] },
            { output: "Diamond Leggings", yield: 1, ingredients: [{ name: "Diamond", count: 7 }] },
            { output: "Diamond Boots", yield: 1, ingredients: [{ name: "Diamond", count: 4 }] },

            { output: "Glowstone", yield: 1, ingredients: [{ name: "Glowstone Dust", count: 4 }] }, 
            { output: "Sea Lantern", yield: 1, ingredients: [{ name: "Prismarine Shard", count: 4 }, { name: "Prismarine Crystal", count: 5 }] },
            { output: "Magma Block", yield: 1, ingredients: [{ name: "Magma Cream", count: 4 }] },
            { output: "Bone Block", yield: 1, ingredients: [{ name: "Bone Meal", count: 9 }] },
            { output: "Slime Block", yield: 1, ingredients: [{ name: "Slime Ball", count: 9 }] },
            { output: "Honey Block", yield: 1, ingredients: [{ name: "Honey Bottle", count: 4 }] },
            { output: "Sugar", yield: 3, ingredients: [{ name: "Sugar Cane", count: 1 }] },
            
            { output: "Torch", yield: 4, ingredients: [{ name: "Coal", count: 1 }, { name: "Stick", count: 1 }] },
            { output: "Soul Torch", yield: 4, ingredients: [{ name: "Coal", count: 1 }, { name: "Stick", count: 1 }, { name: "Soul Sand", count: 1 }] },
            
            { output: "Boat", yield: 1, ingredients: [{ name: "Oak Planks", count: 5 }] },
            { output: "Chest Boat", yield: 1, ingredients: [{ name: "Boat", count: 1 }, { name: "Chest", count: 1 }] },
            
            { output: "Painting", yield: 1, ingredients: [{ name: "Stick", count: 8 }, { name: "White Wool", count: 1 }] },
            { output: "Item Frame", yield: 1, ingredients: [{ name: "Stick", count: 8 }, { name: "Leather", count: 1 }] },
            { output: "Armor Stand", yield: 1, ingredients: [{ name: "Stick", count: 6 }, { name: "Smooth Stone", count: 1 }] },
            { output: "Paper", yield: 3, ingredients: [{ name: "Sugar Cane", count: 3 }] },
            { output: "Book", yield: 1, ingredients: [{ name: "Paper", count: 3 }, { name: "Leather", count: 1 }] },

            { output: "Crafting Table", yield: 1, ingredients: [{ name: "Oak Planks", count: 4 }] },
            { output: "Crafting Table", yield: 1, ingredients: [{ name: "Acacia Planks", count: 4 }] },
            { output: "Crafting Table", yield: 1, ingredients: [{ name: "Cherry Planks", count: 4 }] },
            { output: "Crafting Table", yield: 1, ingredients: [{ name: "Jungle Planks", count: 4 }] },
            { output: "Crafting Table", yield: 1, ingredients: [{ name: "Dark Oak Planks", count: 4 }] },
            { output: "Crafting Table", yield: 1, ingredients: [{ name: "Pale Oak Planks", count: 4 }] },

            //Woods
            //Woods - Oak
            { output: "Oak Wood", yield: 3, ingredients: [{ name: "Oak Log", count: 4 }] },
            { output: "Oak Planks", yield: 4, ingredients: [{ name: "Oak Wood", count: 1 }] },
            { output: "Oak Planks", yield: 4, ingredients: [{ name: "Oak Log", count: 1 }] },
            { output: "Oak Door", yield: 3, ingredients: [{ name: "Oak Planks", count: 6 }] },
            { output: "Oak Trapdoor", yield: 3, ingredients: [{ name: "Oak Planks", count: 6 }] },
            { output: "Oak Button", yield: 1, ingredients: [{ name: "Oak Planks", count: 1 }] },


            //Woods - Birch
            { output: "Birch Wood", yield: 3, ingredients: [{ name: "Birch Log", count: 4 }] },
            { output: "Birch Planks", yield: 4, ingredients: [{ name: "Birch Wood", count: 1 }] },
            { output: "Birch Planks", yield: 4, ingredients: [{ name: "Birch Log", count: 1 }] },
            { output: "Birch Trapdoor", yield: 3, ingredients: [{ name: "Birch Planks", count: 6 }] },
            { output: "Birch Button", yield: 1, ingredients: [{ name: "Birch Planks", count: 1 }] },

            
            //Woods - Acacia
            { output: "Acacia Wood", yield: 3, ingredients: [{ name: "Acacia Log", count: 4 }] },
            { output: "Acacia Planks", yield: 4, ingredients: [{ name: "Acacia Wood", count: 1 }] },
            { output: "Acacia Planks", yield: 4, ingredients: [{ name: "Acacia Log", count: 1 }] },
            { output: "Acacia Door", yield: 3, ingredients: [{ name: "Acacia Planks", count: 6 }] },
            { output: "Acacia Trapdoor", yield: 3, ingredients: [{ name: "Acacia Planks", count: 6 }] },
            { output: "Acacia Button", yield: 1, ingredients: [{ name: "Acacia Planks", count: 1 }] },

            //Woods - Cherry
            { output: "Cherry Wood", yield: 3, ingredients: [{ name: "Cherry Log", count: 4 }] },
            { output: "Cherry Planks", yield: 4, ingredients: [{ name: "Cherry Wood", count: 1 }] },
            { output: "Cherry Planks", yield: 4, ingredients: [{ name: "Cherry Log", count: 1 }] },
            { output: "Cherry Door", yield: 3, ingredients: [{ name: "Cherry Planks", count: 6 }] },
            { output: "Cherry Trapdoor", yield: 3, ingredients: [{ name: "Cherry Planks", count: 6 }] },
            { output: "Cherry Button", yield: 1, ingredients: [{ name: "Cherry Planks", count: 1 }] },

            //Woods - Jungle
            { output: "Jungle Wood", yield: 3, ingredients: [{ name: "Jungle Log", count: 4 }] },
            { output: "Jungle Planks", yield: 4, ingredients: [{ name: "Jungle Wood", count: 1 }] },
            { output: "Jungle Planks", yield: 4, ingredients: [{ name: "Jungle Log", count: 1 }] },
            { output: "Jungle Door", yield: 3, ingredients: [{ name: "Jungle Planks", count: 6 }] },
            { output: "Jungle Trapdoor", yield: 3, ingredients: [{ name: "Jungle Planks", count: 6 }] },
            { output: "Jungle Button", yield: 1, ingredients: [{ name: "Jungle Planks", count: 1 }] },

            //Woods - Dark Oak
            { output: "Dark Oak Wood", yield: 3, ingredients: [{ name: "Dark Oak Log", count: 4 }] },
            { output: "Dark Oak Planks", yield: 4, ingredients: [{ name: "Dark Oak Wood", count: 1 }] },
            { output: "Dark Oak Planks", yield: 4, ingredients: [{ name: "Dark Oak Log", count: 1 }] },
            { output: "Dark Oak Door", yield: 3, ingredients: [{ name: "Dark Oak Planks", count: 6 }] },
            { output: "Dark Oak Trapdoor", yield: 3, ingredients: [{ name: "Dark Oak Planks", count: 6 }] },
            { output: "Dark Oak Button", yield: 1, ingredients: [{ name: "Dark Oak Planks", count: 1 }] },

            //Woods - Spruce
            { output: "Spruce Wood", yield: 3, ingredients: [{ name: "Spruce Log", count: 4 }] },
            { output: "Spruce Planks", yield: 4, ingredients: [{ name: "Spruce Wood", count: 1 }] },
            { output: "Spruce Planks", yield: 4, ingredients: [{ name: "Spruce Log", count: 1 }] },
            { output: "Spruce Door", yield: 3, ingredients: [{ name: "Spruce Planks", count: 6 }] },
            { output: "Spruce Trapdoor", yield: 3, ingredients: [{ name: "Spruce Planks", count: 6 }] },
            { output: "Spruce Button", yield: 1, ingredients: [{ name: "Spruce Planks", count: 1 }] },

            //Woods - Mangrove
            { output: "Mangrove Wood", yield: 3, ingredients: [{ name: "Mangrove Log", count: 4 }] },
            { output: "Mangrove Planks", yield: 4, ingredients: [{ name: "Mangrove Wood", count: 1 }] },
            { output: "Mangrove Planks", yield: 4, ingredients: [{ name: "Mangrove Log", count: 1 }] },
            { output: "Mangrove Door", yield: 3, ingredients: [{ name: "Mangrove Planks", count: 6 }] },
            { output: "Mangrove Trapdoor", yield: 3, ingredients: [{ name: "Mangrove Planks", count: 6 }] },
            { output: "Mangrove Button", yield: 1, ingredients: [{ name: "Mangrove Planks", count: 1 }] },


            //Redstone
            { output: "Lever", yield: 1, ingredients: [{ name: "Cobblestone", count: 1 }, { name: "Stick", count: 1 }] },
            { output: "Redstone Torch", yield: 1, ingredients: [{ name: "Stick", count: 1 }, { name: "Redstone Dust", count: 1 }] },
            { output: "Redstone Dust", yield: 9, ingredients: [{ name: "Redstone Block", count: 1 }] },
            //{ output: "Redstone Block", yield: 1, ingredients: [{ name: "Redstone Dust", count: 9 }] },
            { output: "Redstone Repeater", yield: 1, ingredients: [{ name: "Stone", count: 3 }, { name: "Redstone Torch", count: 2 }, { name: "Redstone Dust", count: 1 }] },
            { output: "Redstone Comparator", yield: 1, ingredients: [{ name: "Stone", count: 3 }, { name: "Redstone Torch", count: 3 }, { name: "Nether Quartz", count: 1 }] },
            { output: "Dispenser", yield: 1, ingredients: [{ name: "Cobblestone", count: 7 }, { name: "Bow", count: 1 }, { name: "Redstone Dust", count: 1 }] },
            { output: "Dropper", yield: 1, ingredients: [{ name: "Cobblestone", count: 7 }, { name: "Redstone Dust", count: 1 }] },
            { output: "Observer", yield: 1, ingredients: [{ name: "Cobblestone", count: 6 }, { name: "Nether Quartz", count: 1 }, { name: "Redstone Dust", count: 2 }] },
            { output: "Redstone Lamp", yield: 1, ingredients: [{ name: "Redstone Dust", count: 4 }, { name: "Glowstone", count: 1 }] },
            { output: "Target Block", yield: 1, ingredients: [{ name: "Redstone Dust", count: 4 }, { name: "Hay Bale", count: 1 }] },
            { output: "Tripwire Hook", yield: 2, ingredients: [{ name: "Oak Planks", count: 1 }, { name: "Stick", count: 1 }, { name: "Iron Ingot", count: 1 }] },
            { output: "Lightning Rod", yield: 1, ingredients: [{ name: "Copper Ingot", count: 3 }] },
            { output: "Chest", yield: 1, ingredients: [{ name: "Oak Planks", count: 8 }] },
            { output: "TNT", yield: 1, ingredients: [{ name: "Gunpowder", count: 5 }, { name: "Sand", count: 4 }] },
            { output: "Hopper", yield: 1, ingredients: [{ name: "Iron Ingot", count: 5 }, { name: "Chest", count: 1 }] },
            { output: "Minecart", yield: 1, ingredients: [{ name: "Iron Ingot", count: 5 }] },
            { output: "Chest Minecart", yield: 1, ingredients: [{ name: "Minecart", count: 1 }, { name: "Chest", count: 1 }] },
            { output: "Hopper Minecart", yield: 1, ingredients: [{ name: "Minecart", count: 1 }, { name: "Hopper", count: 1 }] },
            { output: "Furnace Minecart", yield: 1, ingredients: [{ name: "Minecart", count: 1 }, { name: "Furnace", count: 1 }] },
            { output: "TNT Minecart", yield: 1, ingredients: [{ name: "Minecart", count: 1 }, { name: "TNT", count: 1 }] },
            { output: "Rail", yield: 16, ingredients: [{ name: "Iron Ingot", count: 6 }, { name: "Stick", count: 1 }] },
            { output: "Powered Rail", yield: 6, ingredients: [{ name: "Gold Ingot", count: 6 }, { name: "Stick", count: 1 }, { name: "Redstone Dust", count: 1 }] },


            //Glass
            { output: "Glass", yield: 1, ingredients: [{ name: "Sand", count: 1 }] },
            { output: "Glass", yield: 1, ingredients: [{ name: "Red Sand", count: 1 }] },


            //Food
            { output: "Bread", yield: 1, ingredients: [{ name: "Wheat", count: 3 }] },
            { output: "Golden Apple", yield: 1, ingredients: [{ name: "Gold Ingot", count: 8 }, { name: "Apple", count: 1 }] },
            //{ output: "Cake", yield: 1, ingredients: [{ name: "Milk Bucket", count: 3 }, { name: "Sugar", count: 2 }, {name: "Egg", count: 1}, {name: "Wheat", count: 3}] },
            { output: "Cookie", yield: 8, ingredients: [{ name: "Wheat", count: 2 }, { name: "Cocoa Beans", count: 1 }] },
            { output: "Mushroom Stew", yield: 1, ingredients: [{ name: "Bowl", count: 1 }, { name: "Brown Mushroom", count: 1 }, {name: "Red Mushroom", count: 1}] },
            { output: "Rabbit Stew", yield: 1, ingredients: [{ name: "Bowl", count: 1 }, { name: "Red Mushroom", count: 1 }, {name: "Baked Potato", count: 1}, {name: "Carrot", count: 1}, {name: "Cooked Rabbit", count: 1}] },
            { output: "Rabbit Stew", yield: 1, ingredients: [{ name: "Bowl", count: 1 }, { name: "Brown Mushroom", count: 1 }, {name: "Baked Potato", count: 1}, {name: "Carrot", count: 1}, {name: "Cooked Rabbit", count: 1}] },
            { output: "Beetroot Soup", yield: 1, ingredients: [{ name: "Bowl", count: 1 }, { name: "Beetroot", count: 6 }] },


            //Misc
            { output: "Beacon", yield: 1, ingredients: [{ name: "Glass", count: 5 }, { name: "Obsidian", count: 3 }, {name: "Nether Star", count: 1}] },
            { output: "Conduit", yield: 1, ingredients: [{ name: "Nautilus Shell", count: 8 }, { name: "Heart of the Sea", count: 1 }] },
            { output: "Book and Quill", yield: 1, ingredients: [{ name: "Feather", count: 1 }, { name: "Book", count: 1 }, {name: "Ink Sac", count: 1}] },
            { output: "Bowl", yield: 1, ingredients: [{ name: "Oak Planks", count: 3 }] },

            { output: "Hay Bale", yield: 1, ingredients: [{ name: "Wheat", count: 9 }] },

            { output: "Furnace", yield: 1, ingredients: [{ name: "Cobblestone", count: 8 }] },

            { output: "Mossy Stone Bricks", yield: 1, ingredients: [{ name: "Stone Bricks", count: 1 }, { name: "Moss Block", count: 1 }] },
            { output: "Diorite", yield: 2, ingredients: [{ name: "Cobblestone", count: 2 }, { name: "Nether Quartz", count: 2 }] },
            { output: "Andesite", yield: 2, ingredients: [{ name: "Cobblestone", count: 1 }, { name: "Diorite", count: 1 }] },
            { output: "Granite", yield: 1, ingredients: [{ name: "Diorite", count: 1 }, { name: "Nether Quartz", count: 1 }] },
            { output: "Bricks (Block)", yield: 1, ingredients: [{ name: "Brick (Item)", count: 4 }] },
        ];

        const baseItemsMap = new Map();
        let activeTab = 'codex';

        function parseCurrency(str) {
            return parseFloat(str.replace('$', '').replace(',', ''));
        }

        function formatCurrency(num) {
            if (num < 0) return '-$' + Math.abs(num).toFixed(2);
            return '$' + num.toFixed(2);
        }

        function parseCsvData(text) {
            const lines = text.trim().split('\n');
            let currentCategory = 'Uncategorized';

            for (let line of lines) {
                line = line.trim();
                if (!line || !line.includes('$')) continue;
                const cols = [];
                let currentVal = '';
                let inQuotes = false;
                for (let i = 0; i < line.length; i++) {
                    const char = line[i];
                    if (char === '"') inQuotes = !inQuotes;
                    else if (char === ',' && !inQuotes) { cols.push(currentVal); currentVal = ''; }
                    else currentVal += char;
                }
                cols.push(currentVal);

                const sellStr = cols[cols.length - 2];
                const buyStr = cols[cols.length - 1];
                const nameStr = cols[cols.length - 3];
                const categoryStr = cols.length >= 4 ? cols[cols.length - 4] : '';

                if (categoryStr && categoryStr.trim() !== '') currentCategory = categoryStr.trim();
                const name = nameStr.trim();
                
                baseItemsMap.set(name, {
                    category: currentCategory,
                    name: name,
                    buy: parseCurrency(buyStr),
                    sell: parseCurrency(sellStr)
                });
            }
        }

        function getAcquisitionPaths(itemName, qty = 1, depth = 0) {
            if (depth > 12) return []; 
            
            let paths = [];

            let baseItem = baseItemsMap.get(itemName);
            if (baseItem && baseItem.buy > 0) {
                paths.push({
                    type: 'buy',
                    cost: baseItem.buy * qty,
                    purchases: [{ name: itemName, qty: qty, cost: baseItem.buy * qty }],
                    yields: qty
                });
            }

            let matchingRecipes = craftingRecipes.filter(r => r.output === itemName);
            
            matchingRecipes.forEach(recipe => {
                let craftsNeeded = Math.ceil(qty / recipe.yield);
                let actualYield = craftsNeeded * recipe.yield;

                let ingredientsPaths = recipe.ingredients.map(ing => {
                    return getAcquisitionPaths(ing.name, ing.count * craftsNeeded, depth + 1);
                });

                const cartesian = (arrays) => arrays.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())), [[]]);

                if (ingredientsPaths.every(arr => arr.length > 0)) {
                    let combos = cartesian(ingredientsPaths);
                    
                    combos.forEach(combo => {
                        let totalCost = combo.reduce((sum, p) => sum + p.cost, 0);
                        let combinedPurchases = [];
                        
                        combo.forEach(p => {
                            p.purchases.forEach(purch => {
                                let existing = combinedPurchases.find(e => e.name === purch.name);
                                if (existing) {
                                    existing.qty += purch.qty;
                                    existing.cost += purch.cost;
                                } else {
                                    combinedPurchases.push({ ...purch });
                                }
                            });
                        });

                        paths.push({
                            type: 'craft',
                            cost: totalCost,
                            purchases: combinedPurchases,
                            yields: actualYield
                        });
                    });
                }
            });

            let uniquePaths = [];
            let seen = new Set();
            paths.forEach(p => {
                p.purchases.sort((a, b) => a.name.localeCompare(b.name));
                let sig = p.purchases.map(x => `${x.qty}x${x.name}`).join('|');
                if (!seen.has(sig)) {
                    seen.add(sig);
                    uniquePaths.push(p);
                }
            });

            uniquePaths.sort((a, b) => a.cost - b.cost);
            return uniquePaths;
        }

        parseCsvData(rawCsvData);

        const categorySelect = document.getElementById('categorySelect');
        const allCategories = new Set([...baseItemsMap.values()].map(i => i.category));
        
        allCategories.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            categorySelect.appendChild(option);
        });

        function getIconHTML(itemName) {
            let rawName = itemName.toLowerCase().trim();
            let id = rawName;

            if (rawName.startsWith("candle (")) {
                id = rawName.replace("candle (", "").replace(")", "").replace(/\s+/g, "_") + "_candle";
            } else if (rawName.startsWith("banner pattern (")) {
                // Extracts pattern type -> "creeper_banner_pattern"
                let type = rawName.replace("banner pattern (", "").replace(" charge)", "").replace(")", "").replace(/\s+/g, "_");
                id = type + "_banner_pattern";
            } else {
                id = rawName.replace(/\s*\(.*?\)\s*/g, '') 
                            .replace(/'/g, '')            
                            .trim()
                            .replace(/\s+/g, '_');
            }

            const forcePlaceholder = [
                "chest", "trapped_chest", "ender_chest", 
                "grindstone", "stonecutter",
                "anvil", "chipped_anvil", "damaged_anvil", 
                "conduit", "lightning_rod", "end_rod", 
                "beacon","decorated_pot", "daylight_detector"
            ];
            
            if (forcePlaceholder.includes(id)) {
                return `<img src="${barrierIcon}" alt="${itemName}">`;
            }

            if (id.includes("potion")) id = "potion";
            
            const enchantPrefixes = ["aqua_affinity", "bane_of_arthropods", "blast_protection", "breach", "channeling", "curse_of_binding", "curse_of_vanishing", "density", "depth_strider", "efficiency", "feather_falling", "fire_aspect", "fire_protection", "flame", "fortune", "frost_walker", "impaling", "infinity", "knockback", "looting", "loyalty", "luck_of_the_sea", "lure", "mending", "multishot", "piercing", "power", "projectile_protection", "protection", "punch", "quick_charge", "respiration", "riptide", "sharpness", "silk_touch", "smite", "soul_speed", "swift_sneak", "sweeping_edge", "thorns", "unbreaking", "wind_burst"];
            if (enchantPrefixes.some(ench => id === ench || id.startsWith(ench + "_"))) {
                id = "enchanted_book";
            }

            if (id.includes("banner_pattern")) {
                if (id.includes("flower")) id = "flower_banner_pattern";
                else if (id.includes("creeper")) id = "creeper_banner_pattern";
                else if (id.includes("skull")) id = "skull_banner_pattern";
                else if (id.includes("globe")) id = "globe_banner_pattern";
                else if (id.includes("piglin")) id = "piglin_banner_pattern";
                else if (id.includes("flow")) id = "flow_banner_pattern";
                else if (id.includes("guster")) id = "guster_banner_pattern";
                else id = "mojang_banner_pattern";
            }
            if (id.startsWith("ominous_bottle")) id = "ominous_bottle";

            const itemMap = {
                "nether_bricks_item": "nether_brick",
                "nether_bricks_block": "nether_bricks",
                "brick_item": "brick",
                "bricks_block": "bricks",
                "empty_map": "map",
                "map": "filled_map",
                "locator_map": "filled_map",
                "flow_armor_trim": "flow_armor_trim_smithing_template",
                "bolt_armor_trim": "bolt_armor_trim_smithing_template",
                "enchanted_golden_apple": "golden_apple",
                "redstone_dust": "redstone",
                "nether_quartz": "quartz",
                "prismarine_crystal": "prismarine_crystals",
                "scute": "turtle_scute",
                "armadillo_scute": "armadillo_scute",
                "raw_beef": "beef",
                "raw_porkchop": "porkchop",
                "raw_chicken": "chicken",
                "raw_mutton": "mutton",
                "raw_rabbit": "rabbit",
                "raw_cod": "cod",
                "raw_salmon": "salmon",
                "disc_fragment": "disc_fragment_5",
                "compass": "compass_00",
                "recovery_compass": "recovery_compass_00",
                "clock": "clock_00",
                "name_tag": "name_tag",
                "saddle": "saddle",
                "glow_item_frame": "glow_item_frame",
                "glass_bottle": "glass_bottle",
                "water_bottle": "potion",
                "honey_bottle": "honey_bottle",
                "dragons_breath": "dragon_breath",
                "jack_olantern": "jack_o_lantern",
                "melon_block": "melon",
                "pumpkin": "pumpkin",
                "furnace": "furnace",
                "blast_furnace": "blast_furnace",
                "redstone_comparator": "comparator",
                "redstone_repeater": "repeater",
                "book_and_quill": "writable_book",
                "bowl": "bowl",
                "mushroom_stew": "mushroom_stew",
                "milk_bucket": "milk_bucket",
                "egg": "egg",
                "candle_green": "green_candle",
                "candle_cyan": "cyan_candle",
            };

            if (itemMap[id]) {
                id = itemMap[id];
            }

            function cdnTextureUrl(kind, itemId) {
                return `https://cdn.jsdelivr.net/gh/InventivetalentDev/minecraft-assets@26.2/assets/minecraft/textures/${kind}/${encodeURIComponent(itemId)}.png`;
            }

            const itemUrl = cdnTextureUrl('item', id);

            return `<img src="${itemUrl}" crossorigin="anonymous" 
                         data-fallback="true"
                         onerror="window.handleIconError(this, '${id}')" 
                         alt="${itemName}">`;
        }

        function renderCodexCard(item, quantity) {
            const displayBuy = item.buy * quantity;
            const displaySell = item.sell * quantity;
            return `
                <div class="card">
                    <div class="icon">${getIconHTML(item.name)}</div>
                    <div class="details">
                        <h3 class="name">${quantity > 1 ? quantity + 'x ' : ''}${item.name}</h3>
                        <span class="category">${item.category}</span>
                        <div class="prices">
                            <span class="buy">Buying from Shop: ${formatCurrency(displayBuy)}</span>
                            <span class="sell">Selling to Shop: ${formatCurrency(displaySell)}</span>
                        </div>
                    </div>
                </div>`;
        }

        function renderEngineCard(itemName, quantity) {
            const paths = getAcquisitionPaths(itemName, quantity);
            if (paths.length === 0) return ''; 

            const baseItem = baseItemsMap.get(itemName);
            const sellPrice = (baseItem && baseItem.sell > 0) ? baseItem.sell * quantity : 0;
            
            let sellHeader = sellPrice > 0 
                ? `<span class="sell" style="font-family: monospace; font-size: 1.05rem; font-weight: bold;">Selling to Shop: ${formatCurrency(sellPrice)}</span>` 
                : `<span class="category" style="margin:0;">No Price in Codex found</span>`;

            let pathsHTML = paths.map((path, index) => {
                const isBest = index === 0 && paths.length > 1; 
                let desc = '';
                
                if (path.type === 'buy' && path.purchases.length === 1 && path.purchases[0].name === itemName) {
                    desc = `Buy Direct from Shop`;
                } else {
                    desc = path.purchases.map(p => `${p.qty}x ${p.name}`).join(' + ');
                }

                let yieldBadge = (path.yields > quantity) ? `<span class="path-badge">Yields ${path.yields}x</span>` : '';
                let bestBadge = isBest ? `<span class="path-badge best-badge">Cheapest</span>` : '';
                
                let profitBadge = '';
                if (sellPrice > 0) {
                    let profit = sellPrice - path.cost;
                    if (profit > 0) {
                        profitBadge = `<span class="path-badge badge-profit">Profit: +${formatCurrency(profit)}</span>`;
                    } else if (profit < 0) {
                        profitBadge = `<span class="path-badge badge-loss">Loss: ${formatCurrency(profit)}</span>`;
                    } else {
                        profitBadge = `<span class="path-badge" style="background:#444;">Break Even</span>`;
                    }
                }

                return `
                    <div class="path ${isBest ? 'best' : ''}">
                        <span class="path-cost">${formatCurrency(path.cost)}</span>
                        <span class="path-desc">${desc} ${yieldBadge} ${bestBadge} ${profitBadge}</span>
                    </div>`;
            }).join('');

            return `
                <div class="card">
                    <div class="icon">${getIconHTML(itemName)}</div>
                    <div class="details">
                        <h3 class="name">${quantity > 1 ? quantity + 'x ' : ''}${itemName}</h3>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                            <span class="category" style="margin: 0;">Crafting Options</span>
                            ${sellHeader}
                        </div>
                        <div class="paths-list">
                            ${pathsHTML}
                        </div>
                    </div>
                </div>`;
        }

        function filterData() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const selectedCategory = categorySelect.value;
            
            const qtyRaw = parseInt(document.getElementById('quantityInput').value);
            const quantity = isNaN(qtyRaw) || qtyRaw < 1 ? 1 : qtyRaw;

            if (activeTab === 'codex') {
                const container = document.getElementById('codexGrid');
                container.innerHTML = '';
                
                const baseItems = Array.from(baseItemsMap.values());
                const filtered = baseItems.filter(item => {
                    return item.name.toLowerCase().includes(searchTerm) && 
                           (selectedCategory === 'All' || item.category === selectedCategory);
                });

                if (filtered.length === 0) container.innerHTML = '<div class="no-results">No items found.</div>';
                else filtered.forEach(item => container.insertAdjacentHTML('beforeend', renderCodexCard(item, quantity)));

            } else {
                const container = document.getElementById('engineGrid');
                container.innerHTML = '';
                
                // FIXED: Use a Set to remove duplicate names so items with multiple recipes only get ONE card!
                const craftableItemNames = [...new Set(craftingRecipes.map(r => r.output))];
                
                const filtered = craftableItemNames.filter(name => {
                    return name.toLowerCase().includes(searchTerm) && 
                           (selectedCategory === 'All' || selectedCategory === "Crafting Options");
                });

                let resultsFound = false;
                filtered.forEach(name => {
                    const cardHTML = renderEngineCard(name, quantity);
                    if (cardHTML) {
                        container.insertAdjacentHTML('beforeend', cardHTML);
                        resultsFound = true;
                    }
                });

                if (!resultsFound) container.innerHTML = '<div class="no-results">No craftable items found matching your criteria.</div>';
            }
        }

        function switchTab(tabId) {
            activeTab = tabId;
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
            filterData();
        }

        document.getElementById('searchInput').addEventListener('input', filterData);
        document.getElementById('categorySelect').addEventListener('change', filterData);
        document.getElementById('quantityInput').addEventListener('input', filterData);

        filterData();
